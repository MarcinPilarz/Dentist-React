import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BlikPayment.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const BlikPayment = () => {
  const location = useLocation(); // Ten hook zapewnia dostęp do obiektu lokalizacji
  const { planName, planPrice } = location.state; // Destrukturyzacja stanu z lokalizacji
  const navigate = useNavigate();

  const [blikCode, setBlikCode] = useState(new Array(6).fill(""));

  const handleChange = (value, index) => {
    // Sprawdź, czy wprowadzony znak jest cyfrą
    if (!value.match(/[0-9]/)) return; // Jeśli nie jest cyfrą, zignoruj wprowadzenie

    const newBlikCode = [...blikCode];
    newBlikCode[index] = value.slice(0, 1);
    setBlikCode(newBlikCode);

    // Automatyczne przejście do następnego inputa, jeśli wprowadzono cyfrę
    if (index < 5 && value) {
      document.getElementById(`blik-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = () => {
    console.log("Processing BLIK payment with code:", blikCode.join(""));
    // Tutaj można dodać logikę przetwarzania płatności
  };

  const handleBack = () => {
    navigate(-1); // Wraca do poprzedniej strony
  };

  return (
    <div>
      <div className="choose-payment-page">
        <div className="prymitive-navbar-payment">
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
        <div className="background-payment">
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
