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
      "/dashboard/startup",
      "/dashboard/mentor",
    ];

    const shouldHideNavBar = hideNavBarHere.some((path) =>
      matchPath({ path, end: path === "/test" }, location.pathname)
    );

    // const dynamicRoutes = ["/dashboard/startup/", "/dashboard/mentor/"];

    // const isDynamicRoute = dynamicRoutes.some((route) =>
    //   matchPath({ path: route, end: false }, location.pathname)
    // );

    setShowNavBar(!shouldHideNavBar);
  }, [location]);

  return <div>{showNavBar && children}</div>;
};
