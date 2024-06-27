import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./Profile.css";
import { useDarkMode } from "./DarkModeContext";

const Profile = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const subscriptionsData = [
    {
      name: "Podstawowy",
      details:
        "Zawartość: Wizyty profilaktyczne (2 razy w roku), wybielanie zębów (1 raz w roku). Idealny dla: Klientów szukających podstawowej opieki dentystycznej z dodatkiem estetycznym. Korzyści: Utrzymanie zdrowia jamy ustnej i poprawa estetyki uśmiechu.",
    },
    // Możesz dodać więcej planów tutaj
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

  return (
    <div>
      <NavBar />

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
