import React, { useEffect, useState } from "react";
import { useLocation, matchPath } from "react-router-dom";

export const Show = ({ children }) => {
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(true);

  useEffect(() => {
    const hideNavBarHere = [
      "/login",
      "/register",
      "/register/startup",
      "/register/mentor",
      "/test",
    ];

    const shouldHideNavBar = hideNavBarHere.some((path) =>
      matchPath({ path, end: path === "/test" }, location.pathname)
    );

    const dynamicRoutes = ["/dashboard/startup/:id", "/dashboard/mentor/:id"];

    const isDynamicRoute = dynamicRoutes.some((route) =>
      matchPath({ path: route, end: false }, location.pathname)
    );

    setShowNavBar(!(shouldHideNavBar || isDynamicRoute));
  }, [location]);

  return <div>{showNavBar && children}</div>;
};
