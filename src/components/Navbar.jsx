import React from 'react'
import '../styles/styles.css'

const Navbar = () => {
    return (
        <div className="site-header" id="header">
            <div className='container'>
                <div className="header-inner">
                    <a href="#" className="logo">Maison <span>Dorée</span></a>

                    <nav className="nav-main">
                        <a href="#collections">Collections</a>
                        <a href="#story">Our Story</a>
                        <a href="#craftsmanship">Craftsmanship</a>
                        <a href="#contact">Visit Us</a>
                        <a href="#contact" className="nav-cta">Book Appointment</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
