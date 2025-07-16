const Footer = () => {
    return (
        <footer className="footer-section" id="contact">
        <div className="container footer-content">
          <div>
            <strong>Contact Us:</strong> <a href="mailto:tanmay@cheetahtransport.in">tanmay@cheetahtransport.in</a>
          </div>
          <div>
            <strong>Address:</strong> Ghaziabad-201001
          </div>
          <div className="footer-copy">&copy; {new Date().getFullYear()} Cheetah Transport. All rights reserved.</div>
        </div>
        </footer>
    )
}

export default Footer;  