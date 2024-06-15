import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import MainPhoto from "./MainPhoto";
const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <MainPhoto />
      <main></main>
    </div>
  );
};

export default HomePage;
