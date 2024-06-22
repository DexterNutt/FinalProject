import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Login } from "./pages/Login.jsx";
import { Nav } from "./components/nav/Nav.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.css";
import store from "./store.jsx";
import { Show } from "./components/show/show.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
      <Show>
        <Nav />
      </Show>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Show>
        <Footer />
      </Show>
    </Router>
  </Provider>
);
