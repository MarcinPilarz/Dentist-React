import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ChoosePaymentPage.css"; // Upewnij się, że ścieżka do pliku CSS jest poprawna
import NavBar from "./NavBar";
import Footer from "./Footer";
import BlikPayment from "./BlikPayment";

const ChoosePaymentPage = () => {
  const location = useLocation(); // Ten hook zapewnia dostęp do obiektu lokalizacji
  const { planName, planPrice } = location.state; // Destrukturyzacja stanu z lokalizacji
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handlePayment = () => {
    if (paymentMethod === "card") {
      console.log("Processing card payment...");

      navigate("/card-payment", { state: { planName, planPrice } });
      // Redirect to card payment processing page or handle it here
    } else if (paymentMethod === "blik") {
      console.log("Processing BLIK payment...");
      navigate("/blik-payment", { state: { planName, planPrice } });
      // Redirect to BLIK payment processing page or handle it here
    }
  };

  const buttonClass = `button-payment ${paymentMethod ? "active" : ""}`;

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
        <div className="background-payment">
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
