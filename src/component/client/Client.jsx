
const clients = [
    { name: 'Hero', logo: 'https://www.pngfind.com/pngs/m/9-90489_hd-png-hero-motocorp-logo-transparent-png.png', desc: 'Hero Motors', location: 'Chhapraula & Gurugram' },
    { name: 'DFM Foods', logo: 'https://allpaisa.com/wp-content/uploads/2021/07/DFMFOODS-LOGO.jpg', desc: 'DFM Foods LTD.', location: 'Ghaziabad & Greater Noida, UP' },
    { name: 'Tata', logo: 'https://1000logos.net/wp-content/uploads/2020/04/Tata-Logo-1988.png', desc: 'Tata Group', location: 'India' },
    { name: 'GAIL', logo: 'https://www.indianmirror.com/indian-industries/top-industries/images/gail.jpeg', desc: 'GAIL (India) Ltd.', location: 'Sahibabad, UP' },
    { name: 'Bhushan', logo: 'https://www.asian-voice.com/var/ezdemo_site/storage/images/asian-voice/volumes/2018/26-may-2018/tatas-steel-completes-acquisition-of-bhushan-steel/bhushan/958386-1-eng-GB/bhushan.jpg', desc: 'Bhushan Steels Pvt. Ltd.', location: 'Sahibabad, UP' },
    { name: 'Modern Industries', logo: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/8af755ed43b14192b57793cdfeec7643', desc: 'Modern Industries', location: 'Sahibabad, UP' },
    { name: 'UFLEX', logo: 'https://www.foodinfotech.com/wp-content/uploads/2021/08/UFLEX.jpg', desc: 'UFLEX', location: 'Sahibabad, UP' },
  ];

const Client = () => {


    return (
        <section id="clients" className="clients-section">
        <div className="container">
          <h2>Our Clients</h2>
          <p className="clients-desc">
            We are proud to be the trusted logistics partner for some of India’s most respected companies. Our long-standing relationships are built on reliability, transparency, and a commitment to delivering exceptional service. The success of our clients is at the heart of everything we do.
          </p>
          <div className="clients-grid">
            {clients.map((client, idx) => (
              <div className="client-card" key={idx}>
                <div className="client-logo-placeholder">
                    <img src={client.logo} alt={client.name} />
                </div>
                <div className="client-info">
                  <h4>{client.name}</h4>
                  <p>{client.desc}</p>
                  <span className="client-location">{client.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Client;