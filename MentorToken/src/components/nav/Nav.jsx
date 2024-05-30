import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <span id="title">Mentor Token</span>

      <ul id="nav">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <span id="login">Login</span>
      <button>Get Started</button>
    </>
  );
};
