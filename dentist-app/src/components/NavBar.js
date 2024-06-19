import React from "react";
import Switch from "react-switch";
import "./NavBar.css";

function NavBar({ darkMode, setDarkMode }) {
  const handleChange = (checked) => {
    setDarkMode(checked);
  };
  return (
    <nav className="navbar">
      <ul>
        <li>O nas</li>
        <li>Usługi</li>
        <li>Abonament</li>
        <li>Kontakt</li>
      </ul>

      <Switch
        className="toggle-button"
        onChange={handleChange}
        checked={darkMode}
        offColor="#000000"
        onColor="#4CAF50"
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
      />
      <button className="login-button">Zaloguj</button>
    </nav>
  );
}

export default NavBar;
