import React from "react";
import { useSelector } from "react-redux";
import styles from "./MentorDetails.module.css";

export const MentorDetails = () => {
  const { userData } = useSelector((state) => state.mentorDashboard);

  return (
    <>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsHeader}>
          <span>About</span>
          <img src="/vectors/edit.svg" alt="edit icon" />
        </div>
        <div className={styles.details}>
          <h3>Skills: {userData.skills.join(" | ")}</h3>
          <p>{userData.description}</p>
        </div>
      </div>
    </>
  );
};
