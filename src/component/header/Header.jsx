const Header = () => {
    return (
        <header className="sticky-header">
        <div className="container header-content">
          <div className="logo-title">
            <span className="logo-icon">🚛</span>
            <span className="company-name">Cheetah Transport</span>
          </div>
          <nav>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
          </nav>
        </div>
        </header>
    )
}   
export default Header;