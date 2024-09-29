import React from "react";
import styles from "./VisitorMentorDetails.module.css";

export const VisitorMentorDetails = ({ mentorData }) => {
  if (!mentorData) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsHeader}>
        <span>About</span>
      </div>
      <div className={styles.details}>
        <h3>Skills: {mentorData.skills.join(" | ")}</h3>
        <p>{mentorData.description}</p>
      </div>
    </div>
  );
};
