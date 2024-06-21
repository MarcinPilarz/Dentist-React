import React from "react";
import Switch from "react-switch";
import { Link } from "react-scroll";
import "./NavBar.css";

function NavBar({ darkMode, setDarkMode }) {
  const handleChange = (checked) => {
    setDarkMode(checked);
  };
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link
            to="about-us"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            O nas
          </Link>
        </li>
        <li>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Usługi
          </Link>
        </li>

        <li>
          <Link
            to="abonament-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Abonamenty
          </Link>
        </li>
        <li>
          <Link
            to="contact-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Kontakt
          </Link>
        </li>
      </ul>

      <Switch
        className="toggle-button"
        onChange={handleChange}
        checked={darkMode}
        offColor="#000000"
        onColor="#4CAF50"
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
      />
      <button className="login-button">Zaloguj</button>
    </nav>
  );
}

export default NavBar;
