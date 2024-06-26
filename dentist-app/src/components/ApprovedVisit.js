import React from "react";
import "./ApprovedVisit.css";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import { useDarkMode } from "./DarkModeContext";

const ApprovedVisit = () => {
  const location = useLocation();
  const { darkMode } = useDarkMode();
  const { serviceName, appointmentDate, userEmail } = location.state;
  return (
    <div>
      <NavBar />
      <div className={`approved-visit  ${darkMode ? "dark" : ""}`}>
        <h1>Umów wizytę</h1>
        <p>
          Twoja wizyta została umówiona na dzień{" "}
          {appointmentDate.toLocaleDateString()}. Przypomnienie o wizycie
          przyjdzie SMS-em oraz na adres e-mail: {userEmail}.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ApprovedVisit;
