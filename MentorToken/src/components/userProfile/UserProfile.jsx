import React from "react";
import styles from "./UserProfile.module.css";

export const UserProfile = () => {
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
