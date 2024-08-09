import React from "react";
import styles from "./StartupProfile.module.css";

export const StartupProfile = () => {
  return (
    <div className={styles.userProfile}>
      <img
        src="/startup_logos/8.jpg"
        alt="User Profile"
        className={styles.profileImage}
      />
      <div className={styles.userInfo}>
        <span className={styles.userName}>
          TechWave <br /> Innovations
        </span>
      </div>
    </div>
  );
};
