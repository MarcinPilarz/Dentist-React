import React, { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#395886" : "#d5deef";
  }, [darkMode]); // Efekt będzie uruchamiany za każdym razem, gdy zmieni się `darkMode`
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
