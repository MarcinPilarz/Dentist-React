import React from "react";
import "./ContactSection.css";

const contactInfo = {
  address: {
    label: "Adres",
    value: "Opole, ul. xyz 45-059",
    icon: "https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/codicon_location(1).png",
    lineClass: "long",
  },
  phone: {
    label: "Recepcja",
    value: "+48 111-11-111",
    icon: "https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/bytesize_telephone.png",
    lineClass: "short",
  },
  email: {
    label: "Email",
    value: "xyz@gmail.com",
    icon: "https://storage.googleapis.com/springbootphoto/springbootphoto/dentist-app/entypo_email.png",
    lineClass: "long",
  },
};

const ContactSection = () => {
  return (
    <div className="contact-section" id="contact-section">
      <h1>Kontakt</h1>
      <div className="contact-grid">
        {Object.values(contactInfo).map((info) => (
          <div key={info.label} className="contact-item">
            <div className="contact-icon">
              <img src={info.icon} alt={info.label} />
            </div>
            <div className={`contact-dashed-line ${info.lineClass}`}></div>
            <p className="contact-label">{info.label}</p>
            <p className="contact-value">{info.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
