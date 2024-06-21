import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./AppointmentScheduler.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const AppointmentScheduler = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Tymczasowe założenie, trzeba to zaimplementować

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleProceed = () => {
    if (!isLoggedIn) {
      navigate("/signin");
    } else {
      // Przykładowe dane
      const serviceName = "Wybielanie zębów"; // To powinno pochodzić z wyboru usługi
      const userEmail = "jan.nowak@example.com"; // To powinno pochodzić z logowania

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
      <div className="appointment-scheduler">
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
