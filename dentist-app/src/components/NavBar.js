import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import { Link } from "react-scroll";

import { animateScroll as scroll } from "react-scroll";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { DarkModeProvider } from "./DarkModeContext";
import { useDarkMode } from "./DarkModeContext";
function NavBar({}) {
  const { darkMode, setDarkMode } = useDarkMode();

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleNavigate = () => {
    navigate("/signin");
    setIsNavExpanded(false);
  };

  const closeMenu = () => {
    setIsNavExpanded(false);
  };

  const handleNavigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    } else {
      navigate("/");

      setTimeout(() => {
        const newSection = document.getElementById(sectionId);
        if (newSection) {
          window.scrollTo({
            top: newSection.offsetTop,
            behavior: "smooth",
          });
        }
      }, 100);
    }
    setIsNavExpanded(false);
  };
  const handleLogin = () => {
    if (isLoggedIn) {
      navigate("/my-profile");
    } else {
      navigate("/signin");
    }
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
        <li onClick={() => handleNavigateToSection("about-us")}>O nas</li>
        <li onClick={() => handleNavigateToSection("services")}> Usługi</li>

        <li onClick={() => handleNavigateToSection("abonament-section")}>
          Abonamenty
        </li>
        <li onClick={() => handleNavigateToSection("contact-section")}>
          Kontakt
        </li>

        <li>
          <button className="login-button" onClick={handleLogin}>
            {isLoggedIn ? "Mój Profil" : "Zaloguj"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
