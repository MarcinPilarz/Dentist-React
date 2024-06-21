import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"; // Make sure the CSS file is created and linked
import Footer from "./Footer";

const SignUp = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    if (userData.password !== userData.confirmPassword) {
      tempErrors["password"] = "Hasła nie są identyczne.";
      isValid = false;
    }
    if (
      !(
        /\d/.test(userData.password) &&
        /[A-Z]/.test(userData.password) &&
        /[a-z]/.test(userData.password) &&
        /[^A-Za-z0-9]/.test(userData.password) &&
        userData.password.length >= 8
      )
    ) {
      tempErrors["password"] =
        "Hasło musi zawierać co najmniej 8 znaków, w tym jedną cyfrę, jedną dużą literę, jedną małą literę oraz znak specjalny.";
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Rejestracja zakończona sukcesem!");
      navigate("/signin");
    }
  };

  return (
    <div>
      <div className="choose-payment-page">
        <div className="prymitive-navbar-payment">
          <div className="back-button" onClick={() => navigate(-1)}>
            <img
              src="https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/Arrow%201.png"
              alt="Back"
            />
          </div>
          <h1>
            SmileCare <br></br> Dental
          </h1>
        </div>
        <div className="signin-tabs">
          <div className="tab tab-signup" onClick={() => navigate("/signin")}>
            Logowanie
          </div>
          <div className="tab active tab-signup">Rejestracja</div>
        </div>

        <div className="signup-form">
          <div className="avatar avatar-signup">
            <img
              src="https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/Person%20circle.png"
              alt="Avatar"
            />
          </div>

          <div className="signup-form-backround">
            <div className="form-row">
              <div className="input-group">
                <label>Imię</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Imię"
                  value={userData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label>Nazwisko</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Nazwisko"
                  value={userData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <label>Numer telefonu</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="+48"
              value={userData.phoneNumber}
              onChange={handleInputChange}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={userData.email}
              onChange={handleInputChange}
            />
            <label>Hasło</label>
            <input
              type="password"
              name="password"
              placeholder="Hasło"
              value={userData.password}
              onChange={handleInputChange}
            />

            <label>Powtórz hasło</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Potwierdź hasło"
              value={userData.confirmPassword}
              onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Stwórz konto</button>

            <p>
              W celu bezpieczeństwa niektóre informacje należy wypełnić przy
              pierwszej wizycie. Związku z tym prosimy o zabranie dowodu
              osobistego.
            </p>
          </div>
        </div>
        {errors.password && (
          <div className="login-error error-signup">{errors.password}</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
