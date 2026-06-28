import React, { useState } from "react";
import { useInquiry } from "../context/InquiryContext";
import "../styles/styles.css";

const Features = () => {
  const { addToInquiry } = useInquiry();
  const [activeTab, setActiveTab] = useState("specifications");

  const pieceInfo = {
    id: "featured-aurora",
    title: "Aurora Pendant",
    price: "$4,850",
    img: "images/maison-hero-02.jpg",
    specifications: "22K Yellow Gold, 18.5 grams weight, adjustable chain",
  };

  const handleAddToBag = () => {
    addToInquiry(pieceInfo);
  };

  return (
    <section className="featured-piece" id="featured-piece">
      <div className="container">
        <div className="featured-grid">
          <div className="featured-image-wrapper">
            <div className="featured-image">
              <img src={pieceInfo.img} alt="Handcrafted gold necklace" />
            </div>
            <div className="featured-badge">New Arrival</div>
          </div>
          <div className="featured-content">
            <p className="text-label featured-label">Featured Piece</p>
            <h2 className="heading-display featured-title">{pieceInfo.title}</h2>
            <p className="text-body featured-description">
              Inspired by the ethereal dance of northern lights, the Aurora
              Pendant captures the fluid movement of light through
              hand-hammered 22-karat gold. Each surface catches and reflects
              light differently, creating a mesmerizing display of golden hues.
            </p>

            {/* Interactive Tab Selectors */}
            <div className="tabs-container">
              <div className="tabs-header">
                <button
                  className={`tab-btn ${activeTab === "specifications" ? "active" : ""}`}
                  onClick={() => setActiveTab("specifications")}
                >
                  Specifications
                </button>
                <button
                  className={`tab-btn ${activeTab === "origin" ? "active" : ""}`}
                  onClick={() => setActiveTab("origin")}
                >
                  Craft & Origin
                </button>
                <button
                  className={`tab-btn ${activeTab === "care" ? "active" : ""}`}
                  onClick={() => setActiveTab("care")}
                >
                  Care Guide
                </button>
              </div>

              <div className="tab-content-panel">
                {activeTab === "specifications" && (
                  <div className="featured-details tab-fade-in">
                    <div className="detail-row">
                      <span className="detail-label">Material</span>
                      <span className="detail-value">22K Yellow Gold</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Weight</span>
                      <span className="detail-value">18.5 grams</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Chain Length</span>
                      <span className="detail-value">18 inches (adjustable)</span>
                    </div>
                  </div>
                )}

                {activeTab === "origin" && (
                  <div className="tab-pane tab-fade-in">
                    <p className="text-body tab-pane-text">
                      Handcrafted in our family workshop using ancient lost-wax casting and hand-forging techniques. Each texture is hand-hammered by master goldsmiths, taking over 14 hours of refined labor to ensure the unique reflection of light. All gold is ethically sourced and 100% recycled.
                    </p>
                  </div>
                )}

                {activeTab === "care" && (
                  <div className="tab-pane tab-fade-in">
                    <p className="text-body tab-pane-text">
                      Gold is an eternal heirloom. To preserve its hand-hammered finish:
                    </p>
                    <ul className="tab-pane-list text-body">
                      <li>Clean occasionally using warm water, mild soap, and a soft-bristled brush.</li>
                      <li>Avoid direct contact with perfumes, chlorine, and harsh chemicals.</li>
                      <li>Store in a separate fabric-lined compartment to avoid surface scratches.</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="featured-price-action">
              <span className="featured-price">{pieceInfo.price}</span>
              <button className="btn-primary" onClick={handleAddToBag}>
                Inquire & Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
