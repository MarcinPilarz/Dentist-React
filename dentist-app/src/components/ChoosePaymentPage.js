import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ChoosePaymentPage.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import BlikPayment from "./BlikPayment";
import { useDarkMode } from "./DarkModeContext";

const ChoosePaymentPage = () => {
  const location = useLocation();
  const { planName, planPrice } = location.state;
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const handlePayment = () => {
    if (paymentMethod === "card") {
      console.log("Processing card payment...");

      navigate("/card-payment", { state: { planName, planPrice } });
    } else if (paymentMethod === "blik") {
      console.log("Processing BLIK payment...");
      navigate("/blik-payment", { state: { planName, planPrice } });
    }
  };

  const buttonClass = `button-payment ${paymentMethod ? "active" : ""}`;

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
        <div className={`background-payment ${darkMode ? "dark" : ""}`}>
          <p>{`Nazwa abonamentu: `}</p>
          <p className="props-name">{planName.toUpperCase()}</p>
          <p>{`Cena:`}</p>
          <p className="price-props">{planPrice}</p>
          <div className="payment-method">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />{" "}
              Mastercard/Visa
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="blik"
                checked={paymentMethod === "blik"}
                onChange={() => setPaymentMethod("blik")}
              />{" "}
              BLIK
            </label>
          </div>
          <button
            className={buttonClass}
            onClick={handlePayment}
            disabled={!paymentMethod}
          >
            Zapłać
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChoosePaymentPage;
