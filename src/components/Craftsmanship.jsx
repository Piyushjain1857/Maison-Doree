import React from 'react'
import '../styles/styles.css'


const Craftsmanship = () => {
    return (
        <div>
            <section className="craftsmanship" id="craftsmanship">
                <div className="container">
                    <div className="craft-grid">
                        <div className="craft-content">
                            <p className="text-label">The Art of Creation</p>
                            <h2 className="heading-display craft-title">
                                Crafted by Hand, Treasured Forever
                            </h2>
                            <p className="text-body craft-text">
                                Each Maison Dorée piece undergoes a meticulous journey
                                from concept to completion. Our artisans employ
                                traditional goldsmithing techniques passed down through
                                generations, ensuring every curve, texture, and finish
                                meets our exacting standards.
                            </p>
                            <ul className="craft-list text-body">
                                <li>Hand-selected materials from ethical sources</li>
                                <li>Traditional lost-wax casting and hand-forging</li>
                                <li>Multiple quality inspections at every stage</li>
                                <li>Personalized finishing and custom sizing</li>
                            </ul>
                            <a href="#contact" className="btn-primary">Commission a Custom Piece</a>
                        </div>
                        <div className="craft-image-wrapper">
                            <div className="craft-image">
                                <img src="images/maison-doree-07.jpg" alt="Jewelry craftsmanship workshop" />
                            </div>
                            <div className="craft-stats">
                                <div className="stat-item">
                                    <p className="stat-number">37</p>
                                    <p className="stat-label">Years of Excellence</p>
                                </div>
                                <div className="stat-item">
                                    <p className="stat-number">12</p>
                                    <p className="stat-label">Master Artisans</p>
                                </div>
                                <div className="stat-item">
                                    <p className="stat-number">8K+</p>
                                    <p className="stat-label">Pieces Created</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Craftsmanship
