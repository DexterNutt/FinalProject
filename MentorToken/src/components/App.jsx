import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Show } from "./show/show.jsx";
import { Home } from "../pages/Home.jsx";
import { About } from "../pages/About.jsx";
import { Contact } from "../pages/Contact.jsx";
import { Login } from "../pages/login/Login.jsx";
import { Nav } from "./nav/Nav.jsx";
import { Footer } from "./footer/Footer.jsx";
import { Register } from "../pages/register/Register.jsx";
import { TestPage } from "../pages/test/TestPage.jsx";
import { MentorDashboard } from "./mentorDashboard/MentorDashboard.jsx";
import { StartupDashboard } from "./startupDashboard/StartupDashboard.jsx";
import { MentorDetailsVisitor } from "./startupDashboard/mentors/mentorDetailsVisitor/MentorDetailsVisitor.jsx";
import { ErrorComponent } from "./error/ErrorComponent.jsx";

const App = () => {
  return (
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
        <Route path="/dashboard/mentor/" element={<MentorDashboard />} />
        <Route path="/dashboard/startup/" element={<StartupDashboard />} />
        <Route
          path="/dashboard/mentor/:mentorId"
          element={<MentorDetailsVisitor />}
        />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
      <Show>
        <Footer />
      </Show>
    </Router>
  );
};

export default App;
