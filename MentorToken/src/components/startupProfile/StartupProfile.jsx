import React from "react";
import styles from "./StartupProfile.module.css";

export const StartupProfile = () => {
  return (
    <div className={styles.userProfile}>
      <img
        src="/avatars/7.webp"
        alt="User Profile"
        className={styles.profileImage}
      />
      <div className={styles.userInfo}>
        <span className={styles.userName}>Kirra Press</span>
        <span className={styles.userRole}>Mentor</span>
      </div>
    </div>
  );
};
