import React, { useState, useEffect, useRef, useCallback } from "react";
import "../styles/styles.css";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef(null);

  const reviews = [
    {
      id: 1,
      stars: 5,
      text: "The attention to detail is extraordinary. My wedding set from Maison Dorée isn't just jewelry — it's a timeless heirloom work of art that I will cherish forever and pass down to my daughter.",
      author: "Catherine W.",
      collection: "Bridal Collection",
      avatar: "images/avatar-01.jpg",
    },
    {
      id: 2,
      stars: 5,
      text: "Working with the design team to create a custom anniversary gift was seamless. They understood my vision, adjusted to my feedback instantly, and exceeded all expectations with the final piece.",
      author: "Michael T.",
      collection: "Custom Design",
      avatar: "images/avatar-02.jpg",
    },
    {
      id: 3,
      stars: 5,
      text: "Three generations of my family have now worn pieces from Maison Dorée. The hand-forged quality is unmatched, and every visit to their Gurugram atelier feels incredibly personal and warm.",
      author: "Eleanor M.",
      collection: "Heritage Collection",
      avatar: "images/avatar-03.jpg",
    },
  ];

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
  }, [stopAutoPlay, reviews.length]);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    startAutoPlay();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
    startAutoPlay();
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container container--narrow">
        <div className="testimonials-header">
          <p className="text-label">Client Stories</p>
          <h2 className="heading-display testimonials-title">Treasured by Many</h2>
          <p className="text-body testimonials-subtitle">
            What our clients say about their private Maison Dorée experience
          </p>
        </div>

        {/* Premium Testimonials Slider */}
        <div
          className="testimonials-slider-container"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <button
            className="slider-nav-btn prev-btn"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="testimonials-slide-wrapper">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`testimonial-slide ${index === activeIndex ? "active" : ""}`}
              >
                <div className="testimonial-card-inner">
                  <div className="testimonial-stars">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="testimonial-text">
                    “{review.text}”
                  </p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      <img src={review.avatar} alt={`${review.author} avatar`} />
                    </div>
                    <div className="testimonial-info">
                      <p className="testimonial-name">{review.author}</p>
                      <p className="testimonial-detail">{review.collection}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="slider-nav-btn next-btn"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators/Dots */}
        <div className="testimonials-indicators">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`testimonials-indicator-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                setActiveIndex(index);
                startAutoPlay();
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
