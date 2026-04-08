import React from 'react'
import '../styles/styles.css'
import { useData } from '../../contexts/DataContext'

const Footer = () => {
  const data = useData();
  const { siteConfig, navConfig } = data;
  const collectionsNav = navConfig.slice(0, 5); // First 5 for collections column
  const companyNav = navConfig.slice(1, 6); // Adjusted for company column
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Contact */}
          <div className="footer-brand">
            <p className="footer-logo">{siteConfig.title}</p>
            <p className="footer-tagline">
              Handcrafted gold jewelry of exceptional quality and timeless elegance. Family-owned atelier
              since 1857.
            </p>
            <div className="footer-contact-info">
              <p>{siteConfig.address.split('<br />')[0]}</p>
              <p>{siteConfig.address.split('<br />')[1]}</p>
              <p><a href={`tel:${siteConfig.phone.replace(/\\s+/g, '')}`}>{siteConfig.phone}</a></p>
              <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
            </div>
          </div>

          {/*  Column 2: Quick Links */}
          <div className="footer-column">
            <h4 className="footer-column-title">Collections</h4>
            <ul className="footer-links">
              {collectionsNav.map((item) => (
                <li key={item.id}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company  */}
          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-links">
              {companyNav.map((item) => (
                <li key={item.id}><a href={item.href}>{item.label}</a></li>
              ))}
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
