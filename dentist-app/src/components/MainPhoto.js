import React from "react";
import { Link } from "react-scroll";
import "./MainPhoto.css";

const MainPhoto = () => {
  return (
    <header className="header">
      <h1 className="h1-main-photo">Gabinet Stomatologiczny</h1>
      <div class="content">
        <button class="appointment-button">
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Umów wizytę
          </Link>
        </button>
      </div>
      <div className="team">
        <img
          className="main-photo-dentist"
          src="https://storage.googleapis.com/springbootphoto/springbootphoto/mainphotofigma%201(1).svg"
          alt="Doctor"
        />
      </div>
    </header>
  );
};

export default MainPhoto;
