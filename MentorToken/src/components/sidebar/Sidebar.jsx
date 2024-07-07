import React, { useState } from "react";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  const [show, setShow] = useState("show");

  return (
    <div className={styles.Sidebar}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="logo" />
        <p>Mentor Token</p>
      </div>
      <div className={styles.LinksContainer}>
        <ul>
          <li className={styles.dashboard}> </li>
          <li className={styles.myStats}> </li>
          <li className={styles.jobFeed}> </li>
        </ul>
        <div className={styles.logout}>
          <div className={styles.icon}></div>
          <div className={styles.text}>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};
