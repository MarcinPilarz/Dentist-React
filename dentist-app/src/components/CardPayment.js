import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CardPayment.css"; // Upewnij się, że stworzyłeś ten plik CSS
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useDarkMode } from "./DarkModeContext";

const CardPayment = () => {
  const location = useLocation();
  const { planName, planPrice } = location.state;
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvc: "",
    rememberCard: false,
  });
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Filtruj tylko dla pól numerycznych
    let filteredValue = value;
    if (name === "cardNumber" || name === "cvc") {
      filteredValue = value.replace(/\D/g, ""); // Usuń wszystko co nie jest cyfrą
    }
    setCardDetails({
      ...cardDetails,
      [name]: type === "checkbox" ? checked : filteredValue,
    });
  };

  const handleSubmit = () => {
    if (isValidCardDetails()) {
      console.log("Processing card payment with details:", cardDetails);

      navigate("/wait-for-accept-payment", { state: { planName, planPrice } });
      // Logika przetwarzania płatności
    } else {
      alert("Invalid card details. Please check your input and try again.");
    }
  };

  const isValidCardDetails = () => {
    return (
      /^[0-9]{16}$/.test(cardDetails.cardNumber) &&
      /^[a-zA-Z\s]+$/.test(cardDetails.cardHolder) &&
      /^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(cardDetails.expiryDate) &&
      /^[0-9]{3}$/.test(cardDetails.cvc)
    );
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
        <div
          className={`background-payment card-background-payment ${
            darkMode ? "dark" : ""
          }`}
        >
          <p>Nazwa abonamentu:</p>
          <p>{planName.toUpperCase()}</p>
          <p>Cena:</p>
          <p>{planPrice}</p>
          <p className="payment-method-chosen">Mastercard/Visa</p>
          <div className="card-details">
            <div className="input-group">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleInputChange}
                maxLength="16"
              />
            </div>
            <div className="input-group">
              <label>Cardholder Name</label>
              <input
                type="text"
                name="cardHolder"
                vvalue={cardDetails.cardHolder}
                onChange={handleInputChange}
              />
            </div>
            <div className="expiration-cvc">
              <div className="input-group">
                <label>Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={cardDetails.expiryDate}
                  onChange={handleInputChange}
                  maxLength="5"
                />
              </div>
              <div className="input-group">
                <label>CVC</label>
                <input
                  type="text"
                  name="cvc"
                  value={cardDetails.cvc}
                  onChange={handleInputChange}
                  maxLength="3"
                />
              </div>
            </div>
            <div className="remember-card">
              <input
                type="checkbox"
                name="rememberCard"
                checked={cardDetails.rememberCard}
                onChange={handleInputChange}
              />
              <label>Zapamiętaj dane z karty</label>
            </div>
          </div>
          <button
            className="button-payment-complete"
            onClick={handleSubmit}
            disabled={
              !cardDetails.cardNumber ||
              !cardDetails.cardHolder ||
              !cardDetails.expiryDate ||
              !cardDetails.cvc
            }
          >
            Zapłać
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CardPayment;
