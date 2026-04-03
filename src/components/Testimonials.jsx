import React from 'react'
import '../styles/styles.css'


const Testimonials = () => {
    return (
        <div>
            <section className="testimonials">
                <div className="container">
                    <div className="testimonials-header">
                        <p className="text-label">Client Stories</p>
                        <h2 className="heading-display testimonials-title">Treasured by Many</h2>
                        <p className="text-body testimonials-subtitle">What our clients say about their Maison Dorée experience</p>
                    </div>

                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <p className="testimonial-text">
                                The attention to detail is extraordinary. My wedding set from Maison Dorée isn't just jewelry —
                                it's a work of art that I'll cherish forever.
                            </p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">
                                    <img src="images/avatar-01.jpg" alt="Catherine W." />
                                </div>
                                <div className="testimonial-info">
                                    <p className="testimonial-name">Catherine W.</p>
                                    <p className="testimonial-detail">Bridal Collection</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <p className="testimonial-text">
                                Working with the design team to create a custom anniversary gift was seamless. They understood
                                my vision and exceeded expectations.
                            </p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">
                                    <img src="images/avatar-02.jpg" alt="Michael T." />
                                </div>
                                <div className="testimonial-info">
                                    <p className="testimonial-name">Michael T.</p>
                                    <p className="testimonial-detail">Custom Design</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <p className="testimonial-text">
                                Three generations of my family have now worn pieces from Maison Dorée. The quality is unmatched
                                and each piece tells our story.
                            </p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">
                                    <img src="images/avatar-03.jpg" alt="Eleanor M." />
                                </div>
                                <div className="testimonial-info">
                                    <p className="testimonial-name">Eleanor M.</p>
                                    <p className="testimonial-detail">Heritage Collection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
