import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./Profile.css";
import { useDarkMode } from "./DarkModeContext";
import Switch from "react-switch";
import { Link } from "react-scroll";
import "./NavBar.css";

const Profile = () => {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useDarkMode();

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));

  const handleLogin = () => {
    if (isLoggedIn) {
      navigate("/my-profile");
    } else {
      navigate("/signin");
    }
    setIsNavExpanded(false);
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem("user");
      navigate("/");
    } else {
      navigate("/signin");
    }
  };
  const subscriptionsData = [
    {
      name: "Podstawowy",
      details:
        "Zawartość: Wizyty profilaktyczne (2 razy w roku), wybielanie zębów (1 raz w roku). Idealny dla: Klientów szukających podstawowej opieki dentystycznej z dodatkiem estetycznym. Korzyści: Utrzymanie zdrowia jamy ustnej i poprawa estetyki uśmiechu.",
    },
  ];
  const [user, setUser] = useState({
    firstName: "Jan",
    lastName: "Kowalski",
    email: "jankowalski@gmail.com",
    address: "ul. xyz 21, Opole, 45-071",
    phoneNumber: "111-111-111",
    avatarUrl:
      "https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/github_profile_image%201(1).png",
    subscriptions: ["Podstawowy"],
    visits: [],
  });

  const getUserSubscriptionDetails = (subscriptionName) => {
    return (
      subscriptionsData.find((sub) => sub.name === subscriptionName) || null
    );
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

  return (
    <div>
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
          <li onClick={() => handleNavigateToSection("services")}>Usługi</li>

          <li onClick={() => handleNavigateToSection("abonament-section")}>
            Abonamenty
          </li>
          <li onClick={() => handleNavigateToSection("contact-section")}>
            Kontakt
          </li>

          <li>
            <button
              className={`${isLoggedIn ? "logout-button" : "login-button"}`}
              onClick={handleLogout}
            >
              {isLoggedIn ? "Wyloguj" : "Zaloguj"}
            </button>
          </li>
        </ul>
      </nav>

      <div className="profile-page">
        <div className={`profile-container ${darkMode ? "dark" : ""}`}>
          <div className="avatar-section">
            <img src={user.avatarUrl} alt="User Avatar" />
            <div className="user-details">
              <p>
                <span className="detail">Imię: {user.firstName}</span>
                <span className="detail">Nazwisko: {user.lastName}</span>
              </p>
              <p>E-mail: {user.email}</p>
              <p>Adres: {user.address}</p>
              <p>Telefon: {user.phoneNumber}</p>
            </div>

            <div className="border-change-photo">
              {" "}
              <div className="change-photo">Zmień zdjęcie</div>
            </div>
          </div>

          <div className="border-change-photo-one">
            {" "}
            <div className="change-photo-one">Zmień zdjęcie</div>
          </div>
          <div className="subscriptions-section">
            <div className="section-title abonament-title">Mój Abonament</div>
            <div className="section-content">
              Nie posiadasz żadnych abonamentów.
            </div>
          </div>

          <div className="visits-section">
            <div className="section-title abonament-title">Moje wizyty</div>
            <div className="section-content">
              Nie masz żadnej umówionej wizyty
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
