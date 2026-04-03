import React from 'react'
import '../styles/styles.css'


const OurStory = () => {
    return (
        <div>
            <section className="story" id="story">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content">
                            <p className="text-label story-label">Our Heritage</p>
                            <h2 className="heading-display story-title">
                                Three Generations of Golden Mastery
                            </h2>
                            <p className="text-body story-text">
                                Founded in 1857 by master goldsmith Henri Beaumont,
                                Maison Dorée has remained a family atelier dedicated to
                                the art of fine gold jewelry. What began in a small
                                workshop in the heart of the jewelry district has
                                blossomed into a celebrated house known for impeccable
                                craftsmanship.
                            </p>
                            <p className="text-body story-text">
                                Today, our third-generation artisans continue the
                                tradition, blending time-honored techniques with
                                contemporary design sensibilities. Every piece that
                                leaves our workshop carries the weight of this legacy.
                            </p>
                            <div className="story-signature">
                                <p className="signature-name">Isabelle Beaumont</p>
                                <p className="signature-title">Creative Director</p>
                            </div>
                        </div>
                        <div className="story-images">
                            <div className="story-image">
                                <img src="images/maison-doree-05.jpg" alt="Goldsmith at work" />
                            </div>
                            <div className="story-image">
                                <img src="images/maison-doree-06.jpg" alt="Jewelry crafting detail" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurStory
