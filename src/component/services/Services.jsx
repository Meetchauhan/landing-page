const services = [
    {
      title: 'Supply Chain/Line',
      desc: 'Specialises in Supply Chain/Line',
      icon: '🚚',
    },
    {
      title: 'Live Tracking',
      desc: 'Live tracking of all vehicles',
      icon: '📡',
    },
    {
      title: 'Secure Shipping',
      desc: 'Secure shipping',
      icon: '🔒',
    },
    {
      title: 'Capacity & Flexibility',
      desc: 'Large Capacity and Flexibility',
      icon: '📦',
    },
    {
      title: 'Timely Delivery',
      desc: 'Timely Delivery',
      icon: '⏱️',
    },
    {
      title: 'Warehouse Management',
      desc: 'Warehouse Management',
      icon: '🏢',
    },
    {
      title: 'Competitive Prices',
      desc: 'Competitive Prices',
      icon: '💸',
    },
    {
      title: 'Future Oriented IT',
      desc: 'Use of future oriented IT services',
      icon: '💻',
    },
  ];

const Services = () => {

    return (
        <section id="services" className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, idx) => (
              <div className="service-card" key={idx}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Services;