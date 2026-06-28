import React, { useEffect, useState, useRef, useCallback } from "react";
import { useInquiry } from "../context/InquiryContext";
import "../styles/styles.css";

const HeroSection = () => {
  const { addToInquiry } = useInquiry();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const slides = [
    {
      id: "hero-serpentine",
      title: "Serpentine Collection",
      tagline: "Handcrafted 22K Solid Gold Cuff",
      price: "$2,400",
      img: "images/maison-hero-01.jpg",
      specifications: "22K Solid Gold, Hammered Texture Finish",
    },
    {
      id: "hero-aurora",
      title: "Aurora Pendant",
      tagline: "Northern Lights Ethereal Pendant",
      price: "$4,850",
      img: "images/maison-hero-02.jpg",
      specifications: "22K Yellow Gold, 18.5 grams weight, adjustable chain",
    },
    {
      id: "hero-heritage",
      title: "Heritage Rings",
      tagline: "Three Generations Golden Mastery Rings",
      price: "$3,200",
      img: "images/maison-hero-03.jpg",
      specifications: "18K Gold Set, hand-carved floral motif bands",
    },
  ];

  const resetInterval = useCallback(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
  }, [slides.length]);

  useEffect(() => {
    resetInterval();
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, [resetInterval]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    resetInterval();
  };

  const handleInquireNow = (slide) => {
    addToInquiry({
      id: slide.id,
      title: slide.title,
      price: slide.price,
      img: slide.img,
      specifications: slide.specifications,
    });
  };

  const handleExploreCollections = (e) => {
    e.preventDefault();
    const element = document.getElementById("collections");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleOurHeritage = (e) => {
    e.preventDefault();
    const element = document.getElementById("story");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="text-label hero-tagline">Artisan Gold Jewelry Since 1857</p>
        <h1 className="heading-display hero-title">
          <div>Where Gold</div>
          <div>Becomes <em>Art</em></div>
        </h1>
        <p className="text-body hero-description">
          Each piece in our collection is handcrafted by master artisans,
          transforming the finest gold into wearable works of art that tell
          your unique story.
        </p>
        <div className="hero-actions">
          <a href="#collections" className="btn-primary" onClick={handleExploreCollections}>
            Explore Collections
          </a>
          <a href="#story" className="btn-text" onClick={handleOurHeritage}>
            Our Heritage
          </a>
        </div>
      </div>

      <div className="hero-image">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.img} alt={slide.title} />
          </div>
        ))}

        <div className="hero-image-overlay">
          <div className="hero-overlay-details">
            <span className="overlay-tagline">{slides[currentSlide].tagline}</span>
            <h3 className="overlay-title">{slides[currentSlide].title}</h3>
            <p className="overlay-price">From {slides[currentSlide].price}</p>
          </div>
          <div className="hero-overlay-actions">
            <button
              className="btn-quick-inquire"
              onClick={() => handleInquireNow(slides[currentSlide])}
            >
              Inquire Now
            </button>
          </div>
        </div>

        {/* Carousel indicators/dots */}
        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-indicator-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => handleSlideChange(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
