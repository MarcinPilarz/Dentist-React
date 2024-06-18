import React from "react";
import "./Footer.css"; // Zakładamy, że style są w tym pliku

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li>O nas</li>
          <li>Usługi</li>
          <li>Abonament</li>
          <li>Kontakt</li>
          <li>Polityka prywatności</li>
        </ul>
      </div>
      <div className="footer-logo">
        <img
          className="dental-logo"
          src="https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/DALL%C2%B7E%202024-04-27%2002.22.58%20-%20A%20modern%2C%20minimalist%20logo%20design%20for%20a%20dental%20clinic%20named%20'SmileCare%20Dental'%201.png"
          alt="SmileCare Dental Logo"
        />
      </div>
      <div className="footer-social">
        <div className="paragraph">
          <p>Odwiedź nas</p>
        </div>
        <div className="social-icons">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/Vector.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/mingcute_facebook-line.png"
              alt="Facebook"
            />
          </a>
        </div>
        <div className="footer-copy">
          <p>Copyright &copy; SmileCare</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
