import React from "react";
import { useNavigate } from "react-router-dom";
import "./AbonamentSection.css";
import AbonamentPage from "./AbonamentPage";
import { useDarkMode } from "./DarkModeContext";

const subscriptionData = {
  title: "Abonamenty",
  description:
    "Zapewnij sobie i swojej rodzinie najlepszą opiekę dentystyczną bez nieoczekiwanych wydatków, wybierając nasz plan subskrypcyjny. Za niewielką miesięczną opłatą zyskujesz dostęp do regularnych przeglądów, procedur profilaktycznych oraz priorytetowych terminów. Zainwestuj w swój uśmiech dzięki planowi, który zwiększa dostępność usług, pomaga oszczędzać i utrzymuje zdrowie Twoich zębów każdego dnia!",
  buttonText: "Wybierz swój plan",
};

const AbonamentSection = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/abonament-page");
  };
  return (
    <div className="abonament-section" id="abonament-section">
      <h1 className={`abonament-title ${darkMode ? "dark" : ""}`}>
        {subscriptionData.title}
      </h1>
      <p className={`abonament-description ${darkMode ? "dark" : ""}`}>
        {subscriptionData.description}
      </p>
      <button className="abonament-button" onClick={handleNavigate}>
        {subscriptionData.buttonText}
      </button>
    </div>
  );
};

export default AbonamentSection;
