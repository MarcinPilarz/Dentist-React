import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WaitForAccept.css";
import Footer from "./Footer";
import { useDarkMode } from "./DarkModeContext";

const WaitForAccept = () => {
  const [status, setStatus] = useState("waiting");
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  useEffect(() => {
    const timer = setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      setStatus(isSuccess ? "success" : "error");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (status === "success") {
      setTimeout(() => navigate("/success-pay"), 2000);
    } else if (status === "error") {
      setTimeout(() => navigate("/error-pay"), 2000);
    }
  }, [status, navigate]);

  const handleBack = () => {
    navigate(-1);
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
          <h1>SmileCare Dental</h1>
        </div>
        <div className={`background-payment ${darkMode ? "dark" : ""}`}>
          <h2>Oczekiwanie na zaakceptowanie płatności</h2>
          {status === "waiting" && <div className="spinner"></div>}
          {status === "success" && <div className="checkmark"></div>}
          {status === "error" && <div className="crossmark"></div>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WaitForAccept;
