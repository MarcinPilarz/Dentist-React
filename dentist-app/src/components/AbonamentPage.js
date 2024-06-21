import React from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import "./AbonamentPage.css"; // Upewnij się, że ścieżka do pliku CSS jest poprawna
import Footer from "./Footer";

const plans = [
  {
    name: "Podstawowy",
    content: [
      "Zawartość: Wizyty profilaktyczne (2 razy w roku), wybielanie zębów (1 raz w roku).",
      "Idealny dla: Klientów szukających podstawowej opieki dentystycznej z dodatkiem estetycznym.",
      "Korzyści: Utrzymanie zdrowia jamy ustnej i poprawa estetyki uśmiechu.",
    ],
    price: "300 zł/rok",
    buttonMessage: "Zaloguj się, aby skorzystać z planu",
    className: "podstawowy",
  },
  {
    name: "Rodzinny",
    content: [
      "Zawartość: Stomatologia dziecięca, wizyty profilaktyczne dla całej rodziny (do 4 osób, 2 razy w roku), 20% zniżki na wybielanie zębów.",
      "Idealny dla: Rodzin z dziećmi, które potrzebują regularnych przeglądów i podstawowej opieki.",
      "Korzyści: Kompleksowa opieka dla całej rodziny, oszczędność dla wieloosobowych gospodarstw domowych.",
    ],
    price: "800 zł/rok",
    buttonMessage: "Wybierz Plan",
    className: "rodzinny",
  },
  {
    name: "Premium",
    content: [
      "Zawartość: Leczenie kanałowe (z ograniczeniem do 2 zabiegów na rok), leczenie przyzębia, wizyty profilaktyczne (3 razy w roku), stomatologia estetyczna (w tym korony i licówki), 30% zniżki na wybielanie zębów.",
      "Idealny dla: Klientów wymagających zaawansowanych zabiegów oraz regularnej i kompleksowej opieki.",
      "Korzyści: Pełny zakres opieki dentystycznej z priorytetowym dostępem do specjalistycznych zabiegów.",
    ],
    price: "1500 zł/rok",
    buttonMessage: "Wybierz Plan",
    className: "premium",
  },
];

const AbonamentPage = () => {
  const isLoggedIn = true; // Tymczasowo ustawiamy na true

  const navigate = useNavigate();

  const handleSelectPlan = (plan) => {
    // Here you can also include authentication checks if needed
    navigate("/choose-payment", {
      state: { planName: plan.name, planPrice: plan.price },
    });
  };
  return (
    <div>
      <NavBar />
      <div className="abonament-page">
        <header>
          <h1 className="abonament-title">Abonamenty</h1>
        </header>
        <section className="abonament-container">
          {plans.map((plan) => (
            <div key={plan.name} className={`plan-card ${plan.className}`}>
              <div className="plan-header">
                <h2>
                  {plan.name}{" "}
                  {plan.name === "Rodzinny" && (
                    <img
                      className="star-icon"
                      src="https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/1828884%201.png"
                      alt="Star"
                      style={{ width: "20px", marginLeft: "10px" }}
                    />
                  )}
                </h2>
              </div>
              <div className="plan-content">
                <ul>
                  {plan.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="plan-pricing">
                <p className="plan-price">{plan.price}</p>
                <button
                  className="plan-button"
                  onClick={() => handleSelectPlan(plan)}
                >
                  {isLoggedIn
                    ? plan.buttonMessage
                    : "Zaloguj się, aby skorzystać z planu"}
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AbonamentPage;
