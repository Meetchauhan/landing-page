import React, { useState } from 'react';

const navLinks = [
  { href: '#mission', label: 'Our Mission' },
  { href: '#services', label: 'Services' },
  { href: '#clients', label: 'Clients' },
  { href: '#team', label: 'Our Team' },
  { href: '#aboutus', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="sticky-header">
      <div className="container header-content">
        <div className="logo-title">
          <span className="logo-icon">🚛</span>
          <span className="company-name">Cheetah Transport</span>
        </div>
        <nav className="desktop-nav">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
        <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">&times;</button>
          <nav className="mobile-nav">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={handleLinkClick}>{link.label}</a>
            ))}
          </nav>
        </div>
        {menuOpen && <div className="drawer-backdrop" onClick={() => setMenuOpen(false)}></div>}
      </div>
    </header>
  );
};

export default Header;