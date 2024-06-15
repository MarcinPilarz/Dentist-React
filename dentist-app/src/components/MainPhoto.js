import React from "react";
import "./MainPhoto.css";

function MainPhoto() {
  return (
    <header className="header">
      <h1 className="h1-main-photo">Gabinet Stomatologiczny</h1>
      <div class="content">
        <button class="appointment-button">Umów wizytę</button>
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
}

export default MainPhoto;
