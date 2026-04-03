import React from 'react'
import '../styles/styles.css'


const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Contact */}
          <div className="footer-brand">
            <p className="footer-logo">Maison <span>Dorée</span></p>
            <p className="footer-tagline">
              Handcrafted gold jewelry of exceptional quality and timeless elegance. Family-owned atelier
              since 1857.
            </p>
            <div className="footer-contact-info">
              <p>490/7 Jawahar Nagar</p>
              <p>Gurugram:- 122001</p>
              <p><a href="tel:+918595850153">+91 8595850153</a></p>
              <p><a href="mailto:Piyushjain@maisondoree.com">Piyushjain@maisondoree.com</a></p>
            </div>
          </div>

          {/*  Column 2: Quick Links */}
          <div className="footer-column">
            <h4 className="footer-column-title">Collections</h4>
            <ul className="footer-links">
              <li><a href="#collections">All Collections</a></li>
              <li><a href="#">Bridal</a></li>
              <li><a href="#">Everyday Elegance</a></li>
              <li><a href="#">Statement Pieces</a></li>
              <li><a href="#">Men's Collection</a></li>
            </ul>
          </div>

          {/* Column 3: Company  */}
          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#story">Our Story</a></li>
              <li><a href="#craftsmanship">Craftsmanship</a></li>
              <li><a href="#contact">Visit Us</a></li>
              <li><a href="#">Custom Design</a></li>
              <li><a href="#">Care Guide</a></li>
            </ul>
          </div>

          {/* Column 4: About This Website */}
          <div className="footer-column footer-about">
            <h4 className="footer-column-title">About This Website</h4>
            <p>
              This is a website designed for gold jewelry boutiques and luxury brands. Made by Piyush Jain. It is a demonstration of my skills in React, HTML, and CSS, showcasing a clean and elegant design that reflects the luxury and craftsmanship of the brand.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Maison Dorée. Design: Made By Piyush Jain</p>
          <div className="footer-social">
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
