import React, { useState } from "react";
import { useInquiry } from "../context/InquiryContext";
import RingViewer3D from "./RingViewer3D";
import "../styles/styles.css";

const Craftsmanship = () => {
  const { addToInquiry } = useInquiry();

  // Customizer State
  const [metal, setMetal] = useState("22k-yellow");
  const [finish, setFinish] = useState("hammered");
  const [gem, setGem] = useState("diamond");

  // Config data mappings
  const metalsInfo = {
    "22k-yellow": { label: "22K Yellow Gold", multiplier: 1.2, color: "#D4A853" },
    "18k-rose": { label: "18K Rose Gold", multiplier: 1.0, color: "#E0A899" },
    "18k-white": { label: "18K White Gold", multiplier: 1.1, color: "#E6E6E6" },
  };

  const finishesInfo = {
    hammered: { label: "Hand-Hammered", addCost: 150 },
    polished: { label: "High Polish", addCost: 0 },
    satin: { label: "Satin Matte", addCost: 80 },
  };

  const gemsInfo = {
    none: { label: "No Gemstone", addCost: 0 },
    diamond: { label: "0.5ct VVS Diamond", addCost: 1800 },
    sapphire: { label: "0.6ct Royal Sapphire", addCost: 950 },
    emerald: { label: "0.5ct Colombian Emerald", addCost: 1100 },
  };

  // Base price for custom band
  const baseBandPrice = 1200;

  // Calculate pricing based on selections
  const calculatePrice = () => {
    const metalFactor = metalsInfo[metal].multiplier;
    const finishCost = finishesInfo[finish].addCost;
    const gemCost = gemsInfo[gem].addCost;
    const total = Math.round((baseBandPrice * metalFactor) + finishCost + gemCost);
    return total;
  };

  const handleInquireConfig = () => {
    const title = `Custom Band (${metalsInfo[metal].label})`;
    const spec = `${finishesInfo[finish].label} finish, set with ${gemsInfo[gem].label}.`;
    const priceStr = `$${calculatePrice().toLocaleString()}`;

    addToInquiry({
      id: `custom-band-${metal}-${finish}-${gem}`,
      title: title,
      price: priceStr,
      img: "images/maison-doree-07.jpg", // placeholder for craftsman rendering
      specifications: spec,
    });
  };

  return (
    <section className="craftsmanship" id="craftsmanship">
      <div className="container">
        <div className="craft-grid">
          <div className="craft-content">
            <p className="text-label">The Art of Creation</p>
            <h2 className="heading-display craft-title">
              Crafted by Hand, Treasured Forever
            </h2>
            <p className="text-body craft-text">
              Each Maison Dorée piece undergoes a meticulous journey from
              concept to completion. Our master artisans employ traditional
              goldsmithing techniques passed down through generations, ensuring
              every curve and finish meets our exacting standards.
            </p>
            <ul className="craft-list text-body">
              <li>Hand-selected materials from ethical, certified sources</li>
              <li>Traditional lost-wax casting and hand-forged elements</li>
              <li>Multiple quality inspections at every stage of production</li>
              <li>Personalized details and complimentary lifetime care</li>
            </ul>

            {/* Stats Counter */}
            <div className="craft-stats-grid">
              <div className="stat-item">
                <p className="stat-number">1857</p>
                <p className="stat-label">Atelier Founded</p>
              </div>
              <div className="stat-item">
                <p className="stat-number">12</p>
                <p className="stat-label">Master Artisans</p>
              </div>
              <div className="stat-item">
                <p className="stat-number">100%</p>
                <p className="stat-label">Ethical Gold</p>
              </div>
            </div>
          </div>

          {/* Interactive Heirloom Customizer Card */}
          <div className="craft-customizer-card">
            <div className="customizer-header">
              <h3 className="heading-display customizer-title">Heirloom Designer</h3>
              <p className="text-label">Interactive Preview</p>
            </div>

            {/* 3D Ring Rendering Graphic */}
            <div className="ring-rendering-box">
              <RingViewer3D metal={metal} finish={finish} gem={gem} />
              <div className="rendering-details">
                <span className="rendering-spec-tag">
                  {metalsInfo[metal].label}
                </span>
                <span className="rendering-spec-tag">
                  {finishesInfo[finish].label}
                </span>
                <span className="rendering-spec-tag">
                  {gemsInfo[gem].label}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="customizer-controls">
              {/* Option 1: Metal Selection */}
              <div className="control-group">
                <label className="control-label text-label">Precious Metal</label>
                <div className="control-options">
                  {Object.entries(metalsInfo).map(([key, info]) => (
                    <button
                      key={key}
                      className={`control-btn ${metal === key ? "active" : ""}`}
                      onClick={() => setMetal(key)}
                    >
                      <span className="color-swatch" style={{ backgroundColor: info.color }} />
                      {key === "22k-yellow" ? "22K Yellow" : key === "18k-rose" ? "18K Rose" : "18K White"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Band Finish */}
              <div className="control-group">
                <label className="control-label text-label">Band Texture</label>
                <div className="control-options">
                  {Object.entries(finishesInfo).map(([key, info]) => (
                    <button
                      key={key}
                      className={`control-btn ${finish === key ? "active" : ""}`}
                      onClick={() => setFinish(key)}
                    >
                      {info.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Gem Accent */}
              <div className="control-group">
                <label className="control-label text-label">Gemstone Accent</label>
                <div className="control-options">
                  {Object.entries(gemsInfo).map(([key]) => (
                    <button
                      key={key}
                      className={`control-btn ${gem === key ? "active" : ""}`}
                      onClick={() => setGem(key)}
                    >
                      {key === "none" ? "None" : key === "diamond" ? "Diamond" : key === "sapphire" ? "Sapphire" : "Emerald"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Customizer Footer */}
            <div className="customizer-footer">
              <div className="customizer-price-info">
                <span className="text-label">Estimated Price</span>
                <span className="customizer-price">
                  ${calculatePrice().toLocaleString()}
                </span>
              </div>
              <button className="btn-primary" onClick={handleInquireConfig}>
                Add Custom Design to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
