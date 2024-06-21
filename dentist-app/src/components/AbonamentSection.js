import React from "react";
import { useNavigate } from "react-router-dom";
import "./AbonamentSection.css"; // Załóżmy, że style będą w tym pliku
import AbonamentPage from "./AbonamentPage";

const subscriptionData = {
  title: "Abonamenty",
  description:
    "Zapewnij sobie i swojej rodzinie najlepszą opiekę dentystyczną bez nieoczekiwanych wydatków, wybierając nasz plan subskrypcyjny. Za niewielką miesięczną opłatą zyskujesz dostęp do regularnych przeglądów, procedur profilaktycznych oraz priorytetowych terminów. Zainwestuj w swój uśmiech dzięki planowi, który zwiększa dostępność usług, pomaga oszczędzać i utrzymuje zdrowie Twoich zębów każdego dnia!",
  buttonText: "Wybierz swój plan",
};

const AbonamentSection = () => {
  const navigate = useNavigate(); // Użyj useNavigate dla nawigacji

  const handleNavigate = () => {
    navigate("/abonament-page");
  };
  return (
    <div className="abonament-section">
      <h1 className="abonament-title">{subscriptionData.title}</h1>
      <p className="abonament-description">{subscriptionData.description}</p>
      <button className="abonament-button" onClick={handleNavigate}>
        {subscriptionData.buttonText}
      </button>
    </div>
  );
};

export default AbonamentSection;
