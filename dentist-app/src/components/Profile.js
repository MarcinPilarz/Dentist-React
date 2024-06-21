import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "Jan",
    lastName: "Kowalski",
    email: "jankowalski@gmail.com",
    address: "ul. xyz 21, Opole, 45-071",
    phoneNumber: "111-111-111",
    avatarUrl:
      "https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/github_profile_image%201(1).png",
    subscriptions: [],
    visits: [],
  });

  return (
    <div>
      <NavBar />

      <div className="profile-page">
        <div className="profile-container">
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
          </div>

          <div className="border-change-photo">
            {" "}
            <div className="change-photo">Zmień zdjęcie</div>
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
