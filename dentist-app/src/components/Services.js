import React from "react";
import "./Services.css"; // Załóżmy, że style będą w tym pliku

const servicesData = [
  {
    id: 1,
    name: "Stomatologia estetyczna",
    icon: "https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/2441144%201.png", // Zmień ścieżkę na odpowiednią
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
  return (
    <div className="services">
      <h1 className="services-title">Usługi</h1>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
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
