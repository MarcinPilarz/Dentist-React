import React from "react";
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

  const handleNavigate = () => {
    navigate("/signin");
  };
  const navigate = useNavigate();
  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
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
        onChange={setDarkMode}
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
      <button className="login-button" onClick={handleNavigate}>
        Zaloguj
      </button>
    </nav>
  );
}

export default NavBar;
