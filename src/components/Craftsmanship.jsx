import React from 'react'
import '../styles/styles.css'
import { useData } from '../../contexts/DataContext.jsx'

const Craftsmanship = () => {
  const data = useData();
  const { craftConfig } = data;
    return (
        <div>
            <section className="craftsmanship" id="craftsmanship">
                <div className="container">
                    <div className="craft-grid">
                        <div className="craft-content">
                            <p className="text-label">The Art of Creation</p>
                            <h2 className="heading-display craft-title">
                                {craftConfig.title}
                            </h2>
                            <p className="text-body craft-text">
                                {craftConfig.text}
                            </p>
                            <ul className="craft-list text-body">
                                {craftConfig.list.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <a href="#contact" className="btn-primary">Commission a Custom Piece</a>
                        </div>
                        <div className="craft-image-wrapper">
                            <div className="craft-image">
                                <img src={craftConfig.img} alt="Jewelry craftsmanship workshop" />
                            </div>
                            <div className="craft-stats">
                                {craftConfig.stats.map((stat, index) => (
                                  <div key={index} className="stat-item">
                                    <p className="stat-number">{stat.number}</p>
                                    <p className="stat-label">{stat.label}</p>
                                  </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Craftsmanship
