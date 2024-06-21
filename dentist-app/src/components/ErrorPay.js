import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "./ErrorPay.css";

const ErrorPay = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <div className="choose-payment-page">
        <div className="prymitive-navbar-payment">
          <h1>
            SmileCare <br></br> Dental
          </h1>
        </div>

        <div className="background-payment">
          <div className="payment-status-page  error-pay">
            <h2>
              Twoja płatność została <br></br> odrzucona.Za 5 sekund <br></br>{" "}
              przekierujemy Cię na stronę główną.
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPay;
