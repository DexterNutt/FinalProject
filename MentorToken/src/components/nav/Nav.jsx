import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export const Nav = () => {
  const logo = (
    <svg
      width="31"
      height="34"
      viewBox="0 0 31 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.1432 9.51847C30.1432 9.13547 29.9356 8.78257 29.6007 8.59657L16.0225 1.05309C15.704 0.876137 15.3167 0.876138 14.9981 1.05309L1.41989 8.59657C1.08509 8.78257 0.877441 9.13547 0.877441 9.51847L0.877441 24.5361C0.877441 24.9191 1.08509 25.272 1.41989 25.458L14.9982 33.0015C15.3167 33.1785 15.704 33.1785 16.0225 33.0015L29.6007 25.458C29.9356 25.272 30.1432 24.9191 30.1432 24.5361V9.51847ZM14.9985 4.77584C15.3169 4.59918 15.7038 4.59918 16.0221 4.77584L23.4575 8.90241C24.1813 9.30414 24.1813 10.3451 23.4573 10.7467L20.9352 12.146C20.5168 12.3782 19.9998 12.2923 19.6285 11.9904C18.5057 11.0774 17.0714 10.5238 15.5103 10.5238C13.9492 10.5238 12.515 11.0774 11.3922 11.9904C11.0209 12.2923 10.5038 12.3782 10.0854 12.146L7.56329 10.7467C6.83939 10.3451 6.83932 9.30414 7.56317 8.90241L14.9985 4.77584ZM13.8844 26.8771C13.8844 27.681 13.021 28.1893 12.318 27.7992L4.67204 23.5557C4.33701 23.3697 4.12919 23.0167 4.12919 22.6336V14.3653C4.12919 13.5611 4.99329 13.0528 5.69623 13.4435L8.48341 14.993C8.91332 15.232 9.11233 15.7365 9.05331 16.2248C9.02172 16.4862 9.00682 16.7549 9.00682 17.0273C9.00682 19.7644 10.6983 22.1152 13.1047 23.0672C13.5532 23.2446 13.8844 23.6571 13.8844 24.1394V26.8771ZM12.2586 17.0273C12.2586 15.2388 13.7219 13.7756 15.5103 13.7756C17.2988 13.7756 18.7621 15.2388 18.7621 17.0273C18.7621 18.8158 17.2988 20.2791 15.5103 20.2791C13.7219 20.2791 12.2586 18.8158 12.2586 17.0273ZM18.7026 27.7992C17.9997 28.1893 17.1362 27.681 17.1362 26.8771V24.1557C17.1362 23.6733 17.4674 23.2609 17.9159 23.0835C20.3224 22.1314 22.0138 19.7806 22.0138 17.0436C22.0138 16.7638 21.9981 16.4881 21.9647 16.2181C21.9048 15.7333 22.1039 15.2339 22.5309 14.9965L25.3244 13.4435C26.0273 13.0528 26.8914 13.5611 26.8914 14.3653V22.6336C26.8914 23.0167 26.6836 23.3697 26.3486 23.5557L18.7026 27.7992Z"
        fill="#696CFF"
      />
    </svg>
  );

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
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.625 9.5H15.2475"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <div className={styles.navbar}>
      <div className={styles.name}>
        {logo}
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
        <span>Login</span>
        <button>
          {arrowRight}
          Get Started
        </button>
      </div>
    </div>
  );
};
