import React from 'react'
import '../styles/styles.css'
import { useData } from '../../contexts/DataContext'

const Collections = () => {
  const data = useData();
  const { collectionsConfig } = data;
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
            {collectionsConfig.map((collection, index) => (
              <div key={index} className="collection-item">
                <div className="collection-image">
                  <img src={collection.img} alt={`${collection.name} jewelry collection`} />
                </div>
                <div className="collection-overlay">
                  <h3 className="collection-name">{collection.name}</h3>
                  <p className="collection-count">{collection.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Collections
