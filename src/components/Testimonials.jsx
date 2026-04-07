import React from 'react'
import '../styles/styles.css'
import { useData } from '../../contexts/DataContext.jsx'

const Testimonials = () => {
  const data = useData();
  const { testimonialsConfig } = data;
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
                      {testimonialsConfig.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-stars">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">
                                    <img src={testimonial.avatar} alt={testimonial.name} />
                                </div>
                                <div className="testimonial-info">
                                    <p className="testimonial-name">{testimonial.name}</p>
                                    <p className="testimonial-detail">{testimonial.detail}</p>
                                </div>
                            </div>
                        </div>
                      ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
