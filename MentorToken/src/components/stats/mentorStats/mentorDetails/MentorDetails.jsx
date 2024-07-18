import React from "react";
import styles from "./MentorDetails.module.css";

export const MentorDetails = ({ mentorData }) => {
  return (
    <>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsHeader}>
          <span>About</span>
          <img src="/vectors/edit.svg" alt="edit icon" />
        </div>
        <div className={styles.details}>
          <h3>Skills: {mentorData.skills.join(" | ")}</h3>
          <p>{mentorData.details}</p>
        </div>
      </div>
    </>
  );
};
