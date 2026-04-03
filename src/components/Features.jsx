import React from 'react'
import '../styles/styles.css'


const Features = () => {
  return (
    <div>
      <section className="featured-piece">
        <div className="container">
          <div className="featured-grid">
            <div className="featured-image-wrapper">
              <div className="featured-image">
                <img src="images/maison-hero-02.jpg" alt="Handcrafted gold necklace" />
              </div>
              <div className="featured-badge">New Arrival</div>
            </div>
            <div className="featured-content">
              <p className="text-label featured-label">Featured Piece</p>
              <h2 className="heading-display featured-title">
                Aurora Pendant
              </h2>
              <p className="text-body featured-description">
                Inspired by the ethereal dance of northern lights,
                the Aurora Pendant captures the fluid movement of light
                through hand-hammered 22-karat gold. Each surface catches
                and reflects light differently, creating a mesmerizing
                display of golden hues.
              </p>
              <div className="featured-details">
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
              <p className="featured-price">$4,850</p>
              <a href="#contact" className="btn-primary">Inquire About This Piece</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
