import React, { useEffect, useRef } from "react";
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

const RingViewer3D = ({ metal, finish, gem }) => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const ringGroupRef = useRef(null);
  const bandMeshRef = useRef(null);
  const gemMeshRef = useRef(null);
  
  // Track dragging state
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 7;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    // Get container dimensions or default
    const width = mountRef.current.clientWidth || 280;
    const height = 180;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
    ringGroup.rotation.x = 0.5; // slight tilt to see 3D shape
    scene.add(ringGroup);
    ringGroupRef.current = ringGroup;

    // A. Band (Torus Geometry)
    const torusGeom = new THREE.TorusGeometry(1.6, 0.28, 32, 100);
    
    // Add displacement vertex noise if finish is hand-hammered to simulate textured surface
    if (finish === "hammered") {
      const positionAttribute = torusGeom.attributes.position;
      for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);
        const z = positionAttribute.getZ(i);
        
        // Add pseudo-random noise along normal directions
        const noise = (Math.sin(x * 12) * Math.cos(y * 12) * Math.sin(z * 12)) * 0.025;
        positionAttribute.setX(i, x + noise);
        positionAttribute.setY(i, y + noise);
        positionAttribute.setZ(i, z + noise);
      }
      torusGeom.computeVertexNormals();
    }

    const bandMaterial = new THREE.MeshStandardMaterial({
      color: metalColors[metal],
      metalness: 0.95,
      roughness: finishRoughness[finish],
    });

    const bandMesh = new THREE.Mesh(torusGeom, bandMaterial);
    ringGroup.add(bandMesh);
    bandMeshRef.current = bandMesh;

    // B. Gemstone (Octahedron for gem facet look)
    const gemGeom = new THREE.OctahedronGeometry(0.38, 0); // faceted gemstone
    const gemMaterial = new THREE.MeshPhysicalMaterial({
      color: gemColors[gem] || 0xffffff,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.92, // glass transmission refraction
      thickness: 0.5,
      ior: 2.4, // index of refraction for diamond
      transparent: true,
      opacity: gem === "none" ? 0 : 1,
    });

    const gemMesh = new THREE.Mesh(gemGeom, gemMaterial);
    // Position gem on top of the torus band
    gemMesh.position.set(0, 1.6, 0);
    ringGroup.add(gemMesh);
    gemMeshRef.current = gemMesh;

    // 6. Animation loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Auto rotation when not dragging
      if (!isDragging.current) {
        ringGroup.rotation.y += 0.008;
        const elapsed = clock.getElapsedTime();
        ringGroup.rotation.x = 0.5 + Math.sin(elapsed * 0.5) * 0.08;
      }

      renderer.render(scene, camera);
    };
    animate();

    // 7. Event listeners for interactive dragging rotation
    const handleMouseDown = (e) => {
      isDragging.current = true;
      previousMousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;

      const deltaMove = {
        x: e.clientX - previousMousePosition.current.x,
        y: e.clientY - previousMousePosition.current.y
      };

      ringGroup.rotation.y += deltaMove.x * 0.015;
      ringGroup.rotation.x += deltaMove.y * 0.015;

      previousMousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    // Touch event support for mobile & tablet
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

    // 8. Handle resize
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current) return;
      const w = mountRef.current.clientWidth || 280;
      rendererRef.current.setSize(w, 180);
      camera.aspect = w / 180;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);

      if (domEl) {
        domEl.removeEventListener("mousedown", handleMouseDown);
        domEl.removeEventListener("touchstart", handleTouchStart);
        try {
          domEl.removeChild(renderer.domElement);
        } catch (e) {
          console.warn("WebGL container clean error:", e);
        }
      }

      // Dispose resources
      torusGeom.dispose();
      bandMaterial.dispose();
      gemGeom.dispose();
      gemMaterial.dispose();
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finish]); // Recreate geometry when finish changes to toggle noise deformation

  // Dynamic prop updates for materials
  useEffect(() => {
    if (bandMeshRef.current) {
      bandMeshRef.current.material.color.setHex(metalColors[metal]);
      bandMeshRef.current.material.roughness = finishRoughness[finish];
    }
  }, [metal, finish]);

  useEffect(() => {
    if (gemMeshRef.current) {
      if (gem === "none") {
        gemMeshRef.current.material.opacity = 0;
        gemMeshRef.current.material.transparent = true;
      } else {
        gemMeshRef.current.material.opacity = 1;
        gemMeshRef.current.material.color.setHex(gemColors[gem]);
        gemMeshRef.current.material.transparent = false;
      }
      gemMeshRef.current.material.needsUpdate = true;
    }
  }, [gem]);

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
