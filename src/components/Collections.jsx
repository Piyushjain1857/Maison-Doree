import React from 'react'
import '../styles/styles.css'


const Collections = () => {
  return (
    <div>
      <section className="collections" id="collections">
        <div className="container">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="heading-display section-title">Our Collections</h2>
              <p className="text-body section-subtitle">
                Discover pieces crafted for every chapter of your story
              </p>
            </div>
            <a href="#" className="btn-text">View All Collections</a>
          </div>

          <div className="collections-grid">
            <div className="collection-item">
              <div className="collection-image">
                <img src="images/maison-hero-03.jpg" alt="Bridal jewelry collection" />
              </div>
              <div className="collection-overlay">
                <h3 className="collection-name">Bridal</h3>
                <p className="collection-count">24 pieces</p>
              </div>
            </div>

            <div className="collection-item">
              <div className="collection-image">
                <img src="images/maison-doree-01.jpg" alt="Everyday gold jewelry" />
              </div>
              <div className="collection-overlay">
                <h3 className="collection-name">Everyday Elegance</h3>
                <p className="collection-count">36 pieces</p>
              </div>
            </div>

            <div className="collection-item">
              <div className="collection-image">
                <img src="images/maison-doree-02.jpg" alt="Statement gold pieces" />
              </div>
              <div className="collection-overlay">
                <h3 className="collection-name">Statement</h3>
                <p className="collection-count">18 pieces</p>
              </div>
            </div>

            <div className="collection-item">
              <div className="collection-image">
                <img src="images/maison-doree-03.jpg" alt="Heritage collection" />
              </div>
              <div className="collection-overlay">
                <h3 className="collection-name">Heritage</h3>
                <p className="collection-count">12 pieces</p>
              </div>
            </div>

            <div className="collection-item">
              <div className="collection-image">
                <img src="images/maison-doree-04.jpg" alt="Men's gold collection" />
              </div>
              <div className="collection-overlay">
                <h3 className="collection-name">Men's Collection</h3>
                <p className="collection-count">15 pieces</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Collections
