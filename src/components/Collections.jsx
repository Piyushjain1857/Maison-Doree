import React, { useState } from "react";
import { useInquiry } from "../context/InquiryContext";
import "../styles/styles.css";

const Collections = () => {
  const { addToInquiry } = useInquiry();
  const [filter, setFilter] = useState("all");

  const collectionItems = [
    {
      id: "col-bridal",
      category: "bridal",
      name: "Bridal",
      signaturePiece: "Signature Diamond Bridal Band",
      price: "$6,500",
      img: "images/maison-hero-03.jpg",
      count: "24 pieces",
      specifications: "18K Gold, 1.2ct Ethical VVS Diamonds, handcrafted comfort fit band",
    },
    {
      id: "col-everyday",
      category: "everyday",
      name: "Everyday Elegance",
      signaturePiece: "Classic 18K Hoop Earrings",
      price: "$1,250",
      img: "images/maison-doree-01.jpg",
      count: "36 pieces",
      specifications: "18K Yellow Gold, high polish finish, latch back closure",
    },
    {
      id: "col-statement",
      category: "statement",
      name: "Statement",
      signaturePiece: "Sculpted Gold Cuff",
      price: "$3,900",
      img: "images/maison-doree-02.jpg",
      count: "18 pieces",
      specifications: "22K Yellow Gold, hand-hammered organic cuff design",
    },
    {
      id: "col-heritage",
      category: "heritage",
      name: "Heritage",
      signaturePiece: "Henri Beaumont Ring",
      price: "$2,850",
      img: "images/maison-doree-03.jpg",
      count: "12 pieces",
      specifications: "18K Gold, central hand-carved leaf engraving",
    },
    {
      id: "col-mens",
      category: "mens",
      name: "Men's Collection",
      signaturePiece: "Ethical Gold Signet Ring",
      price: "$2,100",
      img: "images/maison-doree-04.jpg",
      count: "15 pieces",
      specifications: "18K Matte Yellow Gold, customizable engraving top face",
    },
  ];

  const filteredItems =
    filter === "all"
      ? collectionItems
      : collectionItems.filter((item) => item.category === filter);

  const handleQuickInquire = (e, item) => {
    e.stopPropagation();
    addToInquiry({
      id: item.id,
      title: `${item.name} - ${item.signaturePiece}`,
      price: item.price,
      img: item.img,
      specifications: item.specifications,
    });
  };

  return (
    <section className="collections" id="collections">
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <h2 className="heading-display section-title">Our Collections</h2>
            <p className="text-body section-subtitle">
              Discover pieces crafted for every chapter of your story
            </p>
          </div>

          {/* Filter Categories Buttons */}
          <div className="filter-container">
            {["all", "bridal", "everyday", "statement", "heritage", "mens"].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat === "all"
                  ? "All"
                  : cat === "mens"
                  ? "Men's"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="collections-grid-wrapper">
          <div className="collections-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="collection-item card-fade-in">
                <div className="collection-image">
                  <img src={item.img} alt={`${item.name} gold collection`} />
                </div>
                <div className="collection-overlay">
                  <div className="collection-info">
                    <h3 className="collection-name">{item.name}</h3>
                    <p className="collection-count">{item.count}</p>
                    <p className="collection-piece-preview">
                      Signature: {item.signaturePiece}
                    </p>
                  </div>
                  <button
                    className="btn-collection-inquire"
                    onClick={(e) => handleQuickInquire(e, item)}
                  >
                    Quick Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
