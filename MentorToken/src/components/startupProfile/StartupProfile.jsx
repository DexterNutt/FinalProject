import React from "react";
import { useSelector } from "react-redux";
import styles from "./StartupProfile.module.css";

export const StartupProfile = () => {
  const { startupData } = useSelector((state) => state.startupDashboard);

  console.log(startupData);

  return (
    <div className={styles.userProfile}>
      {startupData ? (
        <>
          <img
            src={
              startupData.photo
                ? `http://localhost:9000${startupData.photo}`
                : "/default_logo.png"
            }
            alt="Startup Logo"
            className={styles.profileImage}
          />
          <div className={styles.userInfo}>
            <span className={styles.userName}>
              {startupData.startupName || "Unknown Startup"}
            </span>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
