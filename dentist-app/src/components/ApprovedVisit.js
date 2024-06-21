import React from "react";
import "./ApprovedVisit.css";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const ApprovedVisit = () => {
  const location = useLocation();
  const { serviceName, appointmentDate, userEmail } = location.state;
  return (
    <div>
      <NavBar />
      <div className="approved-visit">
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
