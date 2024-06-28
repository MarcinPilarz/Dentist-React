import React, { createContext, useContext, useState } from "react";

const NavBarContext = createContext();

export const useNavBarContext = () => useContext(NavBarContext);

export const NavBarProvider = ({ children }) => {
  const [isProfilePage, setIsProfilePage] = useState(false);

  return (
    <NavBarContext.Provider value={{ isProfilePage, setIsProfilePage }}>
      {children}
    </NavBarContext.Provider>
  );
};
