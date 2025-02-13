import "./Footer.css"
const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          {/* Üst Kısım - Logo ve Sosyal Medya */}
          <div className="footer-top">
            <h2 className="footer-logo">Bandage</h2>
            <div className="footer-social">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
            </div>
          </div>
        </div>
  
        {/* Orta Kısım - TAM GENİŞLİKTE BEYAZ ARKA PLAN */}
        <div className="footer-middle">
          <div className="footer-container">
            <div className="footer-columns">
              <div className="footer-column">
                <h4>Company Info</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Carrier</a></li>
                  <li><a href="#">We are hiring</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Carrier</a></li>
                  <li><a href="#">We are hiring</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Features</h4>
                <ul>
                  <li><a href="#">Business Marketing</a></li>
                  <li><a href="#">User Analytic</a></li>
                  <li><a href="#">Live Chat</a></li>
                  <li><a href="#">Unlimited Support</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">IOS & Android</a></li>
                  <li><a href="#">Watch a Demo</a></li>
                  <li><a href="#">Customers</a></li>
                  <li><a href="#">API</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Get In Touch</h4>
                <div className="footer-subscribe">
                  <input type="email" placeholder="Your Email" />
                  <button>Subscribe</button>
                </div>
                <p className="footer-text">Lore imp sum dolor Amit</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Alt Kısım - Copyright */}
        <div className="footer-bottom">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  