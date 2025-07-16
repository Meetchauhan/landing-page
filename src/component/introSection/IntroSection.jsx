import React from 'react';

const IntroSection = () => (
  <section className="intro-section">
    <div className="container">
      <h2 className="intro-headline">Fast. Reliable. Nationwide. — Welcome to Cheetah Transport.</h2>
      <h3 className="intro-subheadline">Your trusted logistics partner since 1990. Delivering excellence across India with speed, safety, and service.</h3>
      <p className="intro-text">
        At Cheetah Transport, we specialize in professional, timely, and secure road transportation services across India. With over 30 years of experience and a strong operational network, we are committed to driving your business forward — one shipment at a time.
      </p>
      <ul className="intro-highlights">
        <li>🚛 Pan-India Transport Services</li>
        <li>📍 Real-time Vehicle Tracking</li>
        <li>🏢 Warehouse & Fleet Management</li>
        <li>💼 Trusted by Top Indian Corporations</li>
      </ul>
      <div className="intro-cta">
        <a href="#contact" className="cta-btn">Request a Quote</a>
        <a href="#contact" className="cta-btn secondary">Contact Us</a>
      </div>
    </div>
  </section>
);

export default IntroSection; 