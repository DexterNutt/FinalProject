import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Show = ({ children }) => {
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const showNavBarOnTheseRoutes = ["/", "/home", "/about", "/contact"];

    const shouldShowNavBar = showNavBarOnTheseRoutes.includes(
      location.pathname
    );

    setShowNavBar(shouldShowNavBar);
  }, [location]);

  return <div>{showNavBar ? children : null}</div>;
};
