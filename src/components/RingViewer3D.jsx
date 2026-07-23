import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Map settings to material values
const metalColors = {
  "22k-yellow": 0xdfb05c, // rich yellow gold
  "18k-rose": 0xe2a290,   // elegant rose gold
  "18k-white": 0xe3e3e3,  // premium white gold
};

const finishRoughness = {
  polished: 0.12,  // shiny/glossy
  hammered: 0.38,  // slightly bumpy and diffuse
  satin: 0.65,     // matte satin finish
};

const gemColors = {
  diamond: 0xeef8ff,
  sapphire: 0x123f8a,
  emerald: 0x0a6b35,
};

// WebGL support detector
const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
};

// 2D High quality fallback component when WebGL is unavailable
export const RingFallback2D = ({ metal, finish, gem }) => {
  const metalGradient = {
    "22k-yellow": ["#F5D061", "#E5B139", "#9A7316"],
    "18k-rose": ["#FAD0C4", "#E2A290", "#9E5848"],
    "18k-white": ["#FFFFFF", "#E3E3E3", "#888888"],
  }[metal] || ["#F5D061", "#E5B139", "#9A7316"];

  const gemColorHex = {
    diamond: "#E0F2FE",
    sapphire: "#1E3A8A",
    emerald: "#065F46",
    none: "transparent",
  }[gem] || "#E0F2FE";

  return (
    <div
      className="canvas-3d-wrapper 2d-fallback"
      style={{
        width: "100%",
        height: "180px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
      title="2D Ring Preview"
    >
      <svg width="160" height="130" viewBox="0 0 160 130" fill="none">
        <defs>
          <linearGradient id={`metalGrad-${metal}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={metalGradient[0]} />
            <stop offset="50%" stopColor={metalGradient[1]} />
            <stop offset="100%" stopColor={metalGradient[2]} />
          </linearGradient>
          <filter id="ringGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Outer Ring Band */}
        <ellipse
          cx="80"
          cy="70"
          rx="52"
          ry="38"
          stroke={`url(#metalGrad-${metal})`}
          strokeWidth="14"
          fill="none"
          strokeDasharray={finish === "hammered" ? "4, 2" : "none"}
          filter={finish === "polished" ? "url(#ringGlow)" : undefined}
          opacity={finish === "satin" ? 0.85 : 1}
        />
        
        {/* Inner Band Bevel/Depth effect */}
        <ellipse
          cx="80"
          cy="70"
          rx="45"
          ry="31"
          stroke="rgba(0,0,0,0.25)"
          strokeWidth="2"
          fill="none"
        />

        {/* Gemstone */}
        {gem !== "none" && (
          <g transform="translate(80, 28)">
            {/* Faceted Gem Shape */}
            <polygon
              points="0,-16 14,-4 10,14 -10,14 -14,-4"
              fill={gemColorHex}
              stroke="#FFFFFF"
              strokeWidth="1.2"
              filter="url(#ringGlow)"
            />
            {/* Facet Detail Lines */}
            <line x1="0" y1="-16" x2="0" y2="14" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            <line x1="-14" y1="-4" x2="14" y2="-4" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          </g>
        )}
      </svg>
      <span
        style={{
          fontSize: "0.68rem",
          color: "rgba(255,255,255,0.45)",
          marginTop: "2px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontFamily: "var(--font-sans, sans-serif)",
        }}
      >
        2D Precision Preview
      </span>
    </div>
  );
};

const RingViewer3D = ({ metal, finish, gem }) => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const ringGroupRef = useRef(null);
  const bandMeshRef = useRef(null);
  const gemMeshRef = useRef(null);
  
  const [webglSupported, setWebglSupported] = useState(true);

  // Track dragging state
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Early check for WebGL support
    if (!isWebGLAvailable()) {
      setWebglSupported(false);
      return;
    }

    if (!mountRef.current) return;

    let renderer;
    let animationFrameId;

    try {
      // 1. Scene setup
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // 2. Camera setup
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.z = 7;

      // 3. Renderer setup with safe creation
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false });
      
      const width = mountRef.current.clientWidth || 280;
      const height = 180;
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Clear container before appending
      mountRef.current.innerHTML = "";
      mountRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // 4. Lights setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
      dirLight1.position.set(5, 5, 5);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
      dirLight2.position.set(-5, -3, 3);
      scene.add(dirLight2);

      const pointLight = new THREE.PointLight(0xffffff, 0.8, 20);
      pointLight.position.set(0, 3, 2);
      scene.add(pointLight);

      // 5. Create Ring Mesh group
      const ringGroup = new THREE.Group();
      ringGroup.rotation.x = 0.5;
      scene.add(ringGroup);
      ringGroupRef.current = ringGroup;

      // A. Band (Torus Geometry)
      const torusGeom = new THREE.TorusGeometry(1.6, 0.28, 32, 100);
      
      if (finish === "hammered") {
        const positionAttribute = torusGeom.attributes.position;
        for (let i = 0; i < positionAttribute.count; i++) {
          const x = positionAttribute.getX(i);
          const y = positionAttribute.getY(i);
          const z = positionAttribute.getZ(i);
          
          const noise = (Math.sin(x * 12) * Math.cos(y * 12) * Math.sin(z * 12)) * 0.025;
          positionAttribute.setX(i, x + noise);
          positionAttribute.setY(i, y + noise);
          positionAttribute.setZ(i, z + noise);
        }
        torusGeom.computeVertexNormals();
      }

      const bandMaterial = new THREE.MeshStandardMaterial({
        color: metalColors[metal] || metalColors["22k-yellow"],
        metalness: 0.95,
        roughness: finishRoughness[finish] || finishRoughness.polished,
      });

      const bandMesh = new THREE.Mesh(torusGeom, bandMaterial);
      ringGroup.add(bandMesh);
      bandMeshRef.current = bandMesh;

      // B. Gemstone (Octahedron)
      const gemGeom = new THREE.OctahedronGeometry(0.38, 0);
      const gemMaterial = new THREE.MeshPhysicalMaterial({
        color: gemColors[gem] || 0xffffff,
        roughness: 0.05,
        metalness: 0.1,
        transmission: 0.92,
        thickness: 0.5,
        ior: 2.4,
        transparent: true,
        opacity: gem === "none" ? 0 : 1,
      });

      const gemMesh = new THREE.Mesh(gemGeom, gemMaterial);
      gemMesh.position.set(0, 1.6, 0);
      ringGroup.add(gemMesh);
      gemMeshRef.current = gemMesh;

      // 6. Animation loop
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        if (!isDragging.current) {
          ringGroup.rotation.y += 0.008;
          const elapsed = clock.getElapsedTime();
          ringGroup.rotation.x = 0.5 + Math.sin(elapsed * 0.5) * 0.08;
        }

        renderer.render(scene, camera);
      };
      animate();

      // 7. Interaction handlers
      const handleMouseDown = (e) => {
        isDragging.current = true;
        previousMousePosition.current = { x: e.clientX, y: e.clientY };
      };

      const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        const deltaMove = {
          x: e.clientX - previousMousePosition.current.x,
          y: e.clientY - previousMousePosition.current.y
        };
        ringGroup.rotation.y += deltaMove.x * 0.015;
        ringGroup.rotation.x += deltaMove.y * 0.015;
        previousMousePosition.current = { x: e.clientX, y: e.clientY };
      };

      const handleMouseUp = () => {
        isDragging.current = false;
      };

      const handleTouchStart = (e) => {
        if (e.touches.length === 1) {
          isDragging.current = true;
          previousMousePosition.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
          };
        }
      };

      const handleTouchMove = (e) => {
        if (!isDragging.current || e.touches.length !== 1) return;
        const deltaMove = {
          x: e.touches[0].clientX - previousMousePosition.current.x,
          y: e.touches[0].clientY - previousMousePosition.current.y
        };
        ringGroup.rotation.y += deltaMove.x * 0.015;
        ringGroup.rotation.x += deltaMove.y * 0.015;
        previousMousePosition.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      };

      const handleTouchEnd = () => {
        isDragging.current = false;
      };

      const domEl = mountRef.current;
      if (domEl) {
        domEl.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        domEl.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);
      }

      // 8. Resize Handler
      const handleResize = () => {
        if (!mountRef.current || !rendererRef.current) return;
        const w = mountRef.current.clientWidth || 280;
        rendererRef.current.setSize(w, 180);
        camera.aspect = w / 180;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("resize", handleResize);

      // Cleanup function
      return () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);

        if (domEl) {
          domEl.removeEventListener("mousedown", handleMouseDown);
          domEl.removeEventListener("touchstart", handleTouchStart);
          if (renderer && renderer.domElement && domEl.contains(renderer.domElement)) {
            domEl.removeChild(renderer.domElement);
          }
        }

        torusGeom.dispose();
        bandMaterial.dispose();
        gemGeom.dispose();
        gemMaterial.dispose();
        if (renderer) renderer.dispose();
      };
    } catch (err) {
      console.warn("WebGL initialization failed, switching to 2D preview mode:", err);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (renderer) {
        try { renderer.dispose(); } catch (e) {}
      }
      setWebglSupported(false);
    }
  }, [finish]);

  // Dynamic material updates when props change
  useEffect(() => {
    if (webglSupported && bandMeshRef.current && metalColors[metal]) {
      bandMeshRef.current.material.color.setHex(metalColors[metal]);
      bandMeshRef.current.material.roughness = finishRoughness[finish] || 0.12;
    }
  }, [metal, finish, webglSupported]);

  useEffect(() => {
    if (webglSupported && gemMeshRef.current) {
      if (gem === "none") {
        gemMeshRef.current.material.opacity = 0;
        gemMeshRef.current.material.transparent = true;
      } else {
        gemMeshRef.current.material.opacity = 1;
        gemMeshRef.current.material.color.setHex(gemColors[gem] || 0xeef8ff);
        gemMeshRef.current.material.transparent = false;
      }
      gemMeshRef.current.material.needsUpdate = true;
    }
  }, [gem, webglSupported]);

  if (!webglSupported) {
    return <RingFallback2D metal={metal} finish={finish} gem={gem} />;
  }

  return (
    <div 
      ref={mountRef} 
      className="canvas-3d-wrapper" 
      style={{ width: "100%", height: "180px", cursor: "grab" }}
      title="Drag to rotate ring in 3D"
    />
  );
};

export default RingViewer3D;
