import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export const Nav = () => {
  const arrowRight = (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8223 4.94727L15.3748 9.49977L10.8223 14.0523"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.625 9.5H15.2475"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className={styles.navbar}>
      <div className={styles.name}>
        <img src="/logo.svg" alt="logo" />
        <span> Mentor Token</span>
      </div>

      <ul className={styles.nav}>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className={styles.login}>
        <span>
          <NavLink to="/login">Login</NavLink>
        </span>
        <button>
          {arrowRight}
          Get Started
        </button>
      </div>
    </div>
  );
};
