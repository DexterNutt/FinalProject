import React from "react";
import ReactDOM from "react-dom/client";
import { Show } from "./components/show/show.jsx";
import { Provider } from "react-redux";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Login } from "./pages/login/Login.jsx";
import { Nav } from "./components/nav/Nav.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { RegisterUser } from "./pages/registerUser/RegisterUser.jsx";
import { Register } from "./pages/register/Register.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.css";
import store from "./store.jsx";

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
        <Route path="/register" element={<Register />} />
        <Route path="/register/startup" element={<RegisterUser />} />
        <Route path="/register/mentor" element={<RegisterUser />} />
      </Routes>
      <Show>
        <Footer />
      </Show>
    </Router>
  </Provider>
);
