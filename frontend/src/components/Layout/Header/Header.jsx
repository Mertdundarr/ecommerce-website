import "./Header.css"
const Header = () => {
    return (
      <header>
       <div className="global-notification">
  <div className="container">
    <div className="top-bar-content">
      
      {/* Sol Taraf - Telefon & Mail */}
      <div className="top-bar-left">
        <i className="bi bi-telephone"></i> (225) 555-0118
        <span className="separator">|</span>
        <i className="bi bi-envelope"></i> michelle.rivera@example.com
      </div>

      {/* Orta Kısım - Kampanya Metni */}
      <div className="top-bar-center">
        Follow Us and get a chance to win <strong>80% off</strong>
      </div>

      {/* Sağ Taraf - Sosyal Medya İkonları */}
      <div className="top-bar-right">
        <span>Follow Us :</span>
        <a href="#"><i className="bi bi-instagram"></i></a>
        <a href="#"><i className="bi bi-youtube"></i></a>
        <a href="#"><i className="bi bi-facebook"></i></a>
        <a href="#"><i className="bi bi-twitter"></i></a>
      </div>

    </div>
  </div>
</div>

        <div className="header-row">
          <div className="container">
            <div className="header-wrapper">
              <div className="header-mobile">
                <i className="bi bi-list" id="btn-menu"></i>
              </div>
              <div className="header-left">
                <a href="#" className="logo">Bandage</a>
              </div>
              <div className="header-center" id="sidebar">
                <nav className="navigation">
                  <ul className="menu-list">
                    <li className="menu-list-item">
                      <a href="#" className="menu-link active">
                        Home <i className="bi bi-chevron-down"></i>
                      </a>
                      <div className="menu-dropdown-wrapper">
                        <ul className="menu-dropdown-content">
                          <li><a href="#">Home Clean</a></li>
                          <li><a href="#">Home Collection</a></li>
                          <li><a href="#">Home Minimal</a></li>
                          <li><a href="#">Home Modern</a></li>
                          <li><a href="#">Home Parallax</a></li>
                          <li><a href="#">Home Strong</a></li>
                          <li><a href="#">Home Style</a></li>
                          <li><a href="#">Home Unique</a></li>
                          <li><a href="#">Home RTL</a></li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-list-item megamenu-wrapper">
                      <a href="shop.html" className="menu-link">
                        Shop <i className="bi bi-chevron-down"></i>
                      </a>
                      <div className="menu-dropdown-wrapper">
                        <div className="menu-dropdown-megamenu">
                          <div className="megamenu-links">
                            <div className="megamenu-products">
                              <h3 className="megamenu-products-title">Kadın</h3>
                              <ul className="megamenu-menu-list">
                                <li><a href="#">Bags</a></li>
                                <li><a href="#">Belts</a></li>
                                <li><a href="#">Costmetics</a></li>
                                <li><a href="#">Bags</a></li>
                                <li><a href="#">Hats</a></li>
                                
                              </ul>
                            </div>
                            <div className="megamenu-products">
                              <h3 className="megamenu-products-title">Erkek</h3>
                              <ul className="megamenu-menu-list">
                              <li><a href="#">Bags</a></li>
                                <li><a href="#">Belts</a></li>
                                <li><a href="#">Costmetics</a></li>
                                <li><a href="#">Bags</a></li>
                                <li><a href="#">Hats</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="megamenu-single">
                            <a href="#">
                                <img src="img/mega-menu.jpg" alt="" />
                            </a>
                            <h3 className="megamenu-single-title">TARZINI KONUŞTUR!</h3>
                            <h4 className="megamenu-single-subtitle">
                            Şimdi keşfet, özgürlüğü hisset!
                            </h4>
                            <a href="#" className="megamenu-single-button btn btn-sm">Shop Now</a>
                            </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-list-item">
                      <a href="#" className="menu-link">Abount</a>
                    </li>
                    <li className="menu-list-item">
                      <a href="#" className="menu-link">Blog</a>
                    </li>
                    <li className="menu-list-item">
                      <a href="#" className="menu-link">Contact</a>
                    </li>
                    <li className="menu-list-item">
                      <a href="#" className="menu-link">Pages</a>
                    </li>
                  </ul>
                </nav>
                <i className="bi bi-x-circle" id="close-sidebar"></i>
              </div>
              <div className="header-right">
                <div className="header-right-links">
                  <a href="#" className="header-account">
                    <i className="bi bi-person renk">Logın/Register</i>
                  </a>
                  <button className="search-button">
                    <i className="bi bi-search renk "></i>
                  </button>
                  <a href="#">
                    <i className="bi bi-heart renk"></i>
                  </a>
                  <div className="header-cart">
                    <a href="#" className="header-cart-link">
                      <i className="bi bi-bag renk"></i>
                      <span className="header-cart-count">0</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  
  