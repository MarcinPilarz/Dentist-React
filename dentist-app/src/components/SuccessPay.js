import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessPay.css";
import Footer from "./Footer";
import { useDarkMode } from "./DarkModeContext";
const SuccessPay = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <div className="choose-payment-page">
        <div className={`prymitive-navbar-payment ${darkMode ? "dark" : ""}`}>
          <h1>
            SmileCare <br></br> Dental
          </h1>
        </div>

        <div className={`background-payment ${darkMode ? "dark" : ""}`}>
          <div className="payment-status-page success-pay">
            <h2>
              Twoja płatność została <br></br> zaakceptowana.Za 5 sekund{" "}
              <br></br> przekierujemy Cię na stronę główną.
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessPay;
