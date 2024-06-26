import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";
import { useDarkMode } from "./DarkModeContext";

const servicesData = [
  {
    id: 1,
    name: "Stomatologia estetyczna",
    icon: "https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/2441144%201.png",
  },
  {
    id: 2,
    name: "Leczenie kanałowe",
    icon: "https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/2441082%201.png",
  },
  {
    id: 3,
    name: "Leczenie przyzębia",
    icon: "https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/7164445%201.png",
  },
  {
    id: 4,
    name: "Stomatologia dziecięca",
    icon: "https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/7164454%201.png",
  },
  {
    id: 5,
    name: "Wybielanie zębów",
    icon: "https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/free-teeth-whitening-1594364-1348474%201.png",
  },
  {
    id: 6,
    name: "Wizyta profilaktyczna",
    icon: "https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/dental-exam-icon%201.png",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const isLoggedIn = true;
  const { darkMode } = useDarkMode();

  const handleServiceClick = (serviceName) => {
    if (isLoggedIn) {
      navigate("/appointment-scheduler", { state: { serviceName } });
    } else {
      navigate("/signin");
    }
  };
  return (
    <div className="services" id="services">
      <h1 className={`services-title ${darkMode ? "dark-mode" : ""}`}>
        Usługi
      </h1>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => handleServiceClick(service.name)}
          >
            <img
              src={service.icon}
              alt={service.name}
              className="service-icon"
            />
            <p className="service-name">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
