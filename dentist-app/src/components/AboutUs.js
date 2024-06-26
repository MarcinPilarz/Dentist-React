import React from "react";
import "./AboutUs.css"; // Styl dla komponentu
import { useDarkMode } from "./DarkModeContext";

const mockData = {
  title: "O nas",
  description:
    "Jesteśmy zespołem doświadczonych specjalistów, którzy mają na celu zapewnienie Tobie i Twojej rodzinie kompleksowej opieki stomatologicznej na najwyższym poziomie.",
  image1: {
    src: "https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/o%20nas%20section%201(1).png",
    alt: "Stomatolog przeprowadzający zabieg",
  },
  image2: {
    src: "https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/O%20nas2%202.png",
    alt: "Uśmiechnięty pacjent",
  },
  additionalInfo:
    "Nasza praktyka została założona z myślą o zapewnieniu naszym pacjentom nie tylko pięknych i zdrowych uśmiechów, ale także komfortowej i przyjaznej atmosfery podczas każdej wizyty.",
};

const AboutUs = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`about-us ${darkMode ? "dark" : ""}`} id="about-us">
      <h1 className={`header-section-h1 ${darkMode ? "dark-mode" : ""}`}>
        {mockData.title}
      </h1>
      <div className="image-text-section">
        <img
          src={mockData.image1.src}
          alt={mockData.image1.alt}
          className="about-image about-image-first"
        />
        <p className="text-description test-description-margin">
          {mockData.description}
        </p>
      </div>
      <div className="image-text-section reversed">
        <p className="text-description test-description-additional-info">
          {mockData.additionalInfo}
        </p>
        <img
          src={mockData.image2.src}
          alt={mockData.image2.alt}
          className="about-image about-image-second"
        />
      </div>
    </div>
  );
};

export default AboutUs;
