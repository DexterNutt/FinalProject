import React from "react";
import { useSelector } from "react-redux";
import styles from "./UserProfile.module.css";

export const UserProfile = () => {
  const { userData } = useSelector((state) => state.mentorDashboard);
  console.log(userData);

  return (
    <div className={styles.userProfile}>
      {userData ? (
        <>
          <img
            src={userData.profileImage || "/user.png"}
            alt="User Profile"
            className={styles.profileImage}
          />
          <div className={styles.userInfo}>
            <span className={styles.userName}>
              {userData.mentorName || "Unknown User"}
            </span>
            <span className={styles.userRole}>
              {userData.role || "Unknown role"}
            </span>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
