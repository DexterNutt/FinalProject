import React, { useState, useEffect, useRef } from "react";
import styles from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";

export const Sidebar = ({
  activeItem,
  setActiveItem,
  visibility,
  setVisibility,
}) => {
  const [arrowRotation, setArrowRotation] = useState(false);
  const indicatorRef = useRef(null);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleItemClick = (item) => {
    setActiveItem(item === activeItem ? activeItem : item);
  };

  const handleSidebarVisibility = () => {
    setVisibility(!visibility);
    setArrowRotation(!arrowRotation);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  useEffect(() => {
    const indicator = indicatorRef.current;
    const activeLink = document.querySelector(
      `.${styles.link}.${styles.active}`
    );
    if (indicator && activeLink) {
      indicator.style.top = `${activeLink.offsetTop}px`;
      indicator.style.height = `${activeLink.offsetHeight}px`;
    }
  }, [activeItem, visibility]);

  return (
    <div className={`${styles.sidebar} ${!visibility ? styles.hidden : ""}`}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="logo" />
        <p>Mentor Token</p>
      </div>
      <div
        className={`${styles.hideMenu} ${!visibility ? styles.menuHidden : ""}`}
        onClick={handleSidebarVisibility}
      >
        <img
          src="/vectors/dashboard/hideIcon.svg"
          alt="arrow left"
          className={arrowRotation ? styles.arrowRotation : ""}
        />
      </div>
      <div className={styles.LinksContainer}>
        <div
          className={`${styles.link} ${activeItem === 0 ? styles.active : ""}`}
          onClick={() => handleItemClick(0)}
        >
          <div className={styles.icon}>
            <img src="/vectors/dashboard/category.svg" alt="category icon" />
          </div>
          <div className={styles.text}>
            <span>Dashboard</span>
          </div>
        </div>
        <div
          className={`${styles.link} ${activeItem === 1 ? styles.active : ""}`}
          onClick={() => handleItemClick(1)}
        >
          <div className={styles.icon}>
            <img src="/vectors/dashboard/trello.svg" alt="trello icon" />
          </div>
          <div className={styles.text}>
            <span>My Stats</span>
          </div>
        </div>
        <div
          className={`${styles.link} ${activeItem === 2 ? styles.active : ""}`}
          onClick={() => handleItemClick(2)}
        >
          <div className={styles.icon}>
            <img src="/vectors/dashboard/disc.svg" alt="disc icon" />
          </div>
          <div className={styles.text}>
            <span>Job Feed</span>
          </div>
        </div>
        <div ref={indicatorRef} className={styles.activeIndicator}></div>
      </div>
      <div className={styles.logout}>
        <div className={styles.icon}>
          <img src="/vectors/dashboard/logout.svg" alt="logout arrow" />
        </div>
        <button className={styles.text}>Logout</button>
      </div>
    </div>
  );
};
