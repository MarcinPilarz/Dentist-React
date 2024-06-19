import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import MainPhoto from "./MainPhoto";
import AboutUs from "./AboutUs";
import Services from "./Services";
import AbonamentSection from "./AbonamentSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <MainPhoto />
      <main>
        <section>
          <AboutUs />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <AbonamentSection />
        </section>
        <section>
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
