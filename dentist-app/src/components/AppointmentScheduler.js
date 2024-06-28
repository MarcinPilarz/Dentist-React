import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./AppointmentScheduler.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useDarkMode } from "./DarkModeContext";

const AppointmentScheduler = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { darkMode } = useDarkMode();
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleProceed = () => {
    if (!isLoggedIn) {
      navigate("/signin");
    } else {
      const serviceName = "Wybielanie zębów";
      const userEmail = "jan.nowak@example.com";

      navigate("/approved-visit", {
        state: {
          serviceName,
          appointmentDate: selectedDate,
          userEmail,
        },
      });
    }
  };

  return (
    <div>
      <div className={`appointment-scheduler ${darkMode ? "dark" : ""}`}>
        <div>
          <NavBar />
        </div>
        <div className="content-appointment">
          <div className="visits-title">
            {" "}
            <h2>Umów wizytę</h2>
          </div>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            minDate={new Date()}
          />
          <button
            disabled={!selectedDate}
            onClick={handleProceed}
            className="proceed-button"
          >
            {selectedDate ? "Przejdź dalej" : "Wybierz datę wizyty"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppointmentScheduler;
