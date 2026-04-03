import React, { useEffect, useState } from 'react'
import '../styles/styles.css'

const HeroSection = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: "Serpentine Collection", price: "From $2,400", img: "images/maison-hero-01.jpg" },
    { title: "Aurora Pendant", price: "From $4,850", img: "images/maison-hero-02.jpg" },
    { title: "Heritage Rings", price: "From $3,200", img: "images/maison-hero-03.jpg" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <p className="text-label hero-tagline">Artisan Gold Jewelry Since 1857</p>
          <h1 className="heading-display hero-title">
            <div>Where Gold</div>
            <div>Becomes <em>Art</em></div>
          </h1>
          <p className="text-body hero-description">
            Each piece in our collection is handcrafted by master artisans,
            transforming the finest gold into wearable works of art that
            tell your unique story.
          </p>
          <div className="hero-actions">
            <a href="#collections" className="btn-primary">Explore Collections</a>
            <a href="#story" className="btn-text">Our Heritage</a>
          </div>
        </div>
        <div className="hero-image">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={slide.img} alt={slide.title} />
            </div>
          ))}

          <div className="hero-image-overlay">
            <p className="overlay-title">{slides[currentSlide].title}</p>
            <p className="overlay-price">{slides[currentSlide].price}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
