import React, { useState } from "react";
import { useInquiry } from "../context/InquiryContext";
import "../styles/styles.css";

const ContactUs = () => {
  const { inquiryItems, clearInquiry } = useInquiry();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call and success state
    setIsSubmitted(true);
    clearInquiry();
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-content">
            <p className="text-label">Visit Our Atelier</p>
            <h2 className="heading-display contact-title">
              Experience Maison Dorée
            </h2>
            <p className="text-body contact-text">
              We invite you to visit our Gurugram atelier for a personal
              consultation. Discover our collections in an intimate setting and
              work with our creative team to customize a unique heirloom design.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <p className="contact-item-label text-label">Address</p>
                <p className="contact-item-value text-body">
                  490/7 Jawahar Nagar<br />
                  Gurugram, Haryana - 122001
                </p>
              </div>
              <div className="contact-item">
                <p className="contact-item-label text-label">Hours</p>
                <p className="contact-item-value text-body">
                  Tuesday – Saturday: 10:00 AM to 06:00 PM<br />
                  Sunday – Monday: By Private Appointment
                </p>
              </div>
              <div className="contact-item">
                <p className="contact-item-label text-label">Direct Lines</p>
                <p className="contact-item-value text-body">
                  <a href="tel:+918595850153" className="contact-link">
                    +91 8595850153
                  </a>
                  <br />
                  <a href="mailto:Piyushjain@maisondoree.com" className="contact-link">
                    Piyushjain@maisondoree.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="form-success-state form-fade-in">
                <div className="success-icon-box">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="heading-display success-title">Inquiry Received</h3>
                <p className="text-body success-description">
                  Thank you for booking a private consultation at Maison Dorée. A customer relation specialist will contact you within 24 hours to confirm your scheduled appointment time and prepare your requested items.
                </p>
                <button
                  className="btn-primary"
                  onClick={() => setIsSubmitted(false)}
                  style={{ marginTop: "1.5rem" }}
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <div className="contact-form-wrapper">
                <h3 className="form-title heading-display">Request an Appointment</h3>
                <p className="text-body form-subtitle">
                  Please fill in your details to schedule a private viewing.
                </p>

                <form onSubmit={handleSubmit} id="appointmentForm">
                  {/* Selected Inquiry Bag Items Summary in Form */}
                  {inquiryItems.length > 0 && (
                    <div className="form-inquiry-summary">
                      <p className="summary-title text-label">
                        Requested Pieces for Viewing ({inquiryItems.length})
                      </p>
                      <div className="summary-list">
                        {inquiryItems.map((item) => (
                          <div key={item.id} className="summary-item">
                            <span className="summary-item-name">{item.title}</span>
                            <span className="summary-item-price">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g. Eleanor Vance"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g. eleanor@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g. +91 8595850153"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Tell Us About Your Visit
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Planning a custom design? Requesting a specific carat weight or ring sizing? Let us know here."
                    />
                  </div>

                  <button type="submit" className="form-submit btn-primary">
                    Submit Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
