import React from 'react'
import '../styles/styles.css'
import { useData } from '../../contexts/DataContext.jsx'

const Navbar = () => {
  const data = useData();
  const { siteConfig, navConfig } = data;

    return (
        <div className="site-header" id="header">
            <div className='container'>
                <div className="header-inner">
                    <a href="#" className="logo">{siteConfig.title}</a>

                    <nav className="nav-main">
                      {navConfig.map((item) => (
                        <a 
                          key={item.id}
                          href={item.href} 
                          className={item.cta ? "nav-cta" : ""}
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
