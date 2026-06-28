import React from "react";
import { useInquiry } from "../context/InquiryContext";
import "../styles/styles.css";

const Navbar = () => {
  const {
    inquiryItems,
    theme,
    isBagOpen,
    isMobileMenuOpen,
    toggleTheme,
    toggleBag,
    toggleMobileMenu,
    removeFromInquiry,
    setIsBagOpen,
    setIsMobileMenuOpen,
  } = useInquiry();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleBookAppointment = (e) => {
    e.preventDefault();
    setIsBagOpen(false);
    setIsMobileMenuOpen(false);
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header className="site-header" id="header">
        <div className="container">
          <div className="header-inner">
            <a href="#" className="logo" onClick={(e) => handleNavClick(e, "header")}>
              Maison <span>Dorée</span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="nav-main">
              <a href="#collections" onClick={(e) => handleNavClick(e, "collections")}>
                Collections
              </a>
              <a href="#story" onClick={(e) => handleNavClick(e, "story")}>
                Our Story
              </a>
              <a href="#craftsmanship" onClick={(e) => handleNavClick(e, "craftsmanship")}>
                Craftsmanship
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                Visit Us
              </a>
              <a href="#contact" className="nav-cta" onClick={handleBookAppointment}>
                Book Appointment
              </a>
            </nav>

            {/* Header Right Utilities */}
            <div className="header-utilities">
              {/* Theme Toggle Button */}
              <button
                className="utility-btn theme-toggle-btn"
                onClick={toggleTheme}
                aria-label="Toggle luxury theme"
                title={`Switch to ${theme === "light" ? "Dark" : "Light"} Luxury Mode`}
              >
                {theme === "light" ? (
                  /* Moon Icon */
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  /* Sun Icon */
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </button>

              {/* Inquiry Bag Button */}
              <button
                className="utility-btn bag-btn"
                onClick={toggleBag}
                aria-label="View inquiry list"
                title="View Inquiry Bag"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {inquiryItems.length > 0 && <span className="bag-badge">{inquiryItems.length}</span>}
              </button>

              {/* Mobile Hamburguer Button */}
              <button
                className={`menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? "active" : ""}`}>
        <button className="mobile-nav-close" onClick={toggleMobileMenu}>
          &times;
        </button>
        <ul className="mobile-nav-links">
          <li>
            <a href="#collections" onClick={(e) => handleNavClick(e, "collections")}>
              Collections
            </a>
          </li>
          <li>
            <a href="#story" onClick={(e) => handleNavClick(e, "story")}>
              Our Story
            </a>
          </li>
          <li>
            <a href="#craftsmanship" onClick={(e) => handleNavClick(e, "craftsmanship")}>
              Craftsmanship
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              Visit Us
            </a>
          </li>
        </ul>
        <div className="mobile-nav-cta">
          <a href="#contact" className="nav-cta" onClick={handleBookAppointment} style={{ display: "block", textAlign: "center" }}>
            Book Appointment
          </a>
        </div>
      </div>

      {/* Inquiry Bag Sidebar Drawer */}
      <div className={`bag-drawer ${isBagOpen ? "active" : ""}`}>
        <div className="bag-drawer-header">
          <h3 className="heading-display">Inquiry Bag</h3>
          <button className="bag-drawer-close" onClick={toggleBag}>
            &times;
          </button>
        </div>

        <div className="bag-drawer-content">
          {inquiryItems.length === 0 ? (
            <div className="bag-empty-state">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 15h8" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
              <p className="text-body">Your inquiry bag is empty.</p>
              <p className="text-muted">Browse our collections to request specifications or private viewings of our handcrafted gold pieces.</p>
              <button className="btn-primary" onClick={toggleBag} style={{ marginTop: "1rem" }}>
                Explore Now
              </button>
            </div>
          ) : (
            <>
              <p className="bag-intro text-body">
                You have selected {inquiryItems.length} piece{inquiryItems.length > 1 ? "s" : ""} for inquiry:
              </p>
              <ul className="bag-items-list">
                {inquiryItems.map((item) => (
                  <li key={item.id} className="bag-item">
                    <div className="bag-item-img">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="bag-item-details">
                      <h4 className="bag-item-title">{item.title}</h4>
                      <p className="bag-item-price">{item.price}</p>
                      {item.specifications && (
                        <p className="bag-item-spec">{item.specifications}</p>
                      )}
                    </div>
                    <button
                      className="bag-item-remove"
                      onClick={() => removeFromInquiry(item.id)}
                      title="Remove piece"
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
              <div className="bag-drawer-footer">
                <button className="btn-primary" onClick={handleBookAppointment} style={{ width: "100%", justifyContent: "center" }}>
                  Confirm & Request Appointment
                </button>
                <p className="bag-footer-note">
                  Selected items will be automatically appended to your appointment inquiry request form.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Overlays for drawer backdrops */}
      {(isMobileMenuOpen || isBagOpen) && (
        <div
          className="mobile-overlay active"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsBagOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
