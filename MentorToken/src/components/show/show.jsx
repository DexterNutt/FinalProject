import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Show = ({ children }) => {
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(true);

  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/register"
      //   location.pathname === "/startup" ||
      //   location.pathname === "/mentor"
    ) {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
  }, [location]);

  return <div>{showNavBar && children}</div>;
};