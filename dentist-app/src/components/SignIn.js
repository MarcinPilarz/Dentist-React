import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css"; // Załóżmy, że style będą w tym pliku
import Footer from "./Footer";
import { useDarkMode } from "./DarkModeContext";

const users = [
  {
    firstName: "Jan",
    lastName: "Nowak",
    phoneNumber: "123456789",
    email: "jan.nowak@example.com",
    password: "password123",
  },
  {
    firstName: "Anna",
    lastName: "Kowalska",
    phoneNumber: "987654321",
    email: "anna.kowalska@example.com",
    password: "password321",
  },
];

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { darkMode } = useDarkMode();
  const handleLogin = () => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setError(false); // Resetowanie błędu przy poprawnym logowaniu
      alert("Login successful!");
      navigate("/appointment-scheduler", { state: { userEmail: user.email } });
    } else {
      setError(true); // Ustawienie błędu, gdy dane są niepoprawne
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="choose-payment-page">
        <div className={`prymitive-navbar-payment ${darkMode ? "dark" : ""}`}>
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
      </div>
      <div className="signin-tabs">
        <div className="tab active">Logowanie</div>
        <div className="tab" onClick={() => navigate("/signup")}>
          Rejestracja
        </div>
      </div>

      <div className="signin-form">
        <div className="avatar">
          <img
            src="https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/Person%20circle.png"
            alt="Avatar"
          />
        </div>

        <div className="background-sign-in">
          <label>Login</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Hasło</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={
                "//storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/ph_eye.png"
              }
              alt="Toggle Visibility"
              onClick={togglePasswordVisibility}
              className="password-eye"
            />
          </div>
          <button onClick={handleLogin}>Zaloguj</button>
          <div className="forgot-password">Przypomnij hasło</div>
        </div>
      </div>
      {error && (
        <div className="login-error">Nieprawidłowy login lub hasło</div>
      )}
      <Footer />
    </div>
  );
};

export default SignIn;
