import React from 'react'
import '../styles/styles.css'
import { useData } from '../../contexts/DataContext'

const Features = () => {
  const data = useData();
  const { featuredConfig } = data;
  return (
    <div>
      <section className="featured-piece">
        <div className="container">
          <div className="featured-grid">
              <div className="featured-image-wrapper">
              <div className="featured-image">
                <img src={featuredConfig.img} alt={featuredConfig.title} />
              </div>
              <div className="featured-badge">{featuredConfig.badge}</div>
            </div>
            <div className="featured-content">
              <p className="text-label featured-label">Featured Piece</p>
              <h2 className="heading-display featured-title">
                {featuredConfig.title}
              </h2>
              <p className="text-body featured-description">
                {featuredConfig.description}
              </p>
              <div className="featured-details">
                {featuredConfig.details.map((detail, index) => (
                  <div key={index} className="detail-row">
                    <span className="detail-label">{detail.label}</span>
                    <span className="detail-value">{detail.value}</span>
                  </div>
                ))}
              </div>
              <p className="featured-price">{featuredConfig.price}</p>
              <a href="#contact" className="btn-primary">Inquire About This Piece</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
