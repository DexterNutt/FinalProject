import React from "react";
import ReactDOM from "react-dom/client";
import { Nav } from "./components/nav/Nav.jsx";
import { About } from "./components/pages/About.jsx";
import { Contact } from "./components/pages/Contact.jsx";
import { Home } from "./components/pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);
