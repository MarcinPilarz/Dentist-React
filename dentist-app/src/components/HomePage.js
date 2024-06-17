import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import MainPhoto from "./MainPhoto";
import AboutUs from "./AboutUs";
const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <MainPhoto />
      <main>
        <AboutUs />
      </main>
    </div>
  );
};

export default HomePage;
