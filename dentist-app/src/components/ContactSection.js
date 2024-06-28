import React from "react";
import "./ContactSection.css";
import { useDarkMode } from "./DarkModeContext";

const contactInfo = {
  address: {
    label: "Adres",
    value: "Opole, ul. xyz 45-059",
    icon: "https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/codicon_location(1).png",
    lineClass: "long",
    className: "long-distance",
  },
  phone: {
    label: "Recepcja",
    value: "+48 111-11-111",
    icon: "https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/bytesize_telephone.png",
    lineClass: "short",
    className: "short-distance",
  },
  email: {
    label: "Email",
    value: "xyz@gmail.com",
    icon: "https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/entypo_email.png",
    lineClass: "long",
    className: "long-distance",
  },
};

const ContactSection = () => {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`contact-section ${darkMode ? "dark" : ""}`}
      id="contact-section"
    >
      <h1>Kontakt</h1>
      <div className="contact-grid">
        {Object.values(contactInfo).map((info) => (
          <div
            key={info.label}
            className={`contact-item ${darkMode ? "dark" : ""}`}
          >
            <div className="contact-icon">
              <img src={info.icon} alt={info.label} />
            </div>
            <div className={`contact-dashed-line ${info.lineClass}`}></div>
            <div className="info-background">
              <p className={`contact-label ${info.className}`}>{info.label}</p>
              <p className={`contact-value ${info.className}`}>{info.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
