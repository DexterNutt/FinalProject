import React, { useState } from "react";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="logo" />
        <p>Mentor Token</p>
      </div>
      <div className={styles.LinksContainer}>
        <div className={styles.dashboard}>
          <div className={styles.icon}>
            <img src="/vectors/dashboard/category.svg" alt="category icon" />
          </div>
          <div className={styles.text}>
            <span>Dashboard</span>
          </div>
        </div>
        <div className={styles.myStats}>
          <div className={styles.icon}>
            <img src="/vectors/dashboard/trello.svg" alt="trello icon" />
          </div>
          <div className={styles.text}>
            <span>My Stats</span>
          </div>
        </div>
        <div className={styles.jobFeed}>
          <div className={styles.icon}>
            <img src="/vectors/dashboard/disc.svg" alt="disc icon" />
          </div>
          <div className={styles.text}>
            <span>Job Feed</span>
          </div>
        </div>

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
