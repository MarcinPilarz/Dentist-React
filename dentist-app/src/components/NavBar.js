import React, { useState } from "react";
import Switch from "react-switch";
import { Link } from "react-scroll";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { DarkModeProvider } from "./DarkModeContext";
import { useDarkMode } from "./DarkModeContext";
function NavBar({}) {
  const { darkMode, setDarkMode } = useDarkMode();
  // const handleChange = (checked) => {
  //   setDarkMode(checked);
  // };

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavigate = () => {
    navigate("/signin");
    setIsNavExpanded(false);
  };
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsNavExpanded(false);
  };
  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <span className="navbar-brand">SmileCare Dental</span>

      <div className="controls-container">
        <Switch
          className="toggle-button"
          onChange={setDarkMode}
          checked={darkMode}
          offColor="#000000"
          onColor="#4CAF50"
          checkedIcon={false}
          uncheckedIcon={false}
          handleDiameter={20}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={28}
          width={56}
        />
        <div
          className={`menu-icon ${isNavExpanded ? "open" : ""}`}
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? "×" : "≡"}
        </div>
      </div>
      <ul className={isNavExpanded ? "nav-links active" : "nav-links"}>
        <li onClick={() => setIsNavExpanded(false)}>
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
        <li onClick={() => setIsNavExpanded(false)}>
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

        <li onClick={() => setIsNavExpanded(false)}>
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
        <li onClick={() => setIsNavExpanded(false)}>
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
        {/* </ul> */}

        {/* <div className=".login-toggle-container"> */}
        {/* <Switch
          className="toggle-button"
          onChange={setDarkMode}
          checked={darkMode}
          offColor="#000000"
          onColor="#4CAF50"
          checkedIcon={false}
          uncheckedIcon={false}
          handleDiameter={20}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={28}
          width={56}
        /> */}
        <li>
          <button className="login-button" onClick={handleNavigate}>
            Zaloguj
          </button>
        </li>
        {/* </div> */}
      </ul>
    </nav>
  );
}

export default NavBar;
