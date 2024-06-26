import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BlikPayment.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useDarkMode } from "./DarkModeContext";

const BlikPayment = () => {
  const location = useLocation(); // Ten hook zapewnia dostęp do obiektu lokalizacji
  const { planName, planPrice } = location.state; // Destrukturyzacja stanu z lokalizacji
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const [blikCode, setBlikCode] = useState(new Array(6).fill(""));

  const handleChange = (value, index) => {
    if (!value.match(/[0-9]/)) return;
    const newBlikCode = [...blikCode];
    newBlikCode[index] = value.slice(0, 1);
    setBlikCode(newBlikCode);
    if (index < 5 && value) {
      document.getElementById(`blik-input-${index + 1}`).focus();
    }
  };

  const isValidBlikCode = () => {
    return (
      blikCode.join("").length === 6 &&
      blikCode.every((char) => char.match(/[0-9]/))
    );
  };

  const handleSubmit = () => {
    if (isValidBlikCode()) {
      console.log("Processing BLIK payment with code:", blikCode.join(""));
      navigate("/wait-for-accept-payment", { state: { planName, planPrice } });
    } else {
      alert("Invalid BLIK code. Please check your input and try again.");
    }
  };

  const handleBack = () => {
    navigate(-1); // Wraca do poprzedniej strony
  };

  return (
    <div>
      <div className="choose-payment-page">
        <div className={`prymitive-navbar-payment ${darkMode ? "dark" : ""}`}>
          <div className="back-button" onClick={handleBack}>
            <img
              src="https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/Arrow%201.png"
              alt="Back"
            />
          </div>
          <h1>
            SmileCare <br></br> Dental
          </h1>
        </div>
        <div className={`background-payment ${darkMode ? "dark" : ""}`}>
          <p>{`Nazwa abonamentu: `}</p>
          <p className="props-name">{planName.toUpperCase()}</p>
          <p>{`Cena:`}</p>
          <p className="price-props">{planPrice}</p>
          <div className="blik-code-inputs">
            {blikCode.map((digit, index) => (
              <input
                key={index}
                type="text"
                id={`blik-input-${index}`}
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="blik-input"
              />
            ))}
          </div>
          <button
            className="button-payment-complete"
            onClick={handleSubmit}
            disabled={blikCode.join("").length < 6}
          >
            Zapłać
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlikPayment;
