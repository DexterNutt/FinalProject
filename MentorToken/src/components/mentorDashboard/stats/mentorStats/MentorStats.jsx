import React from "react";
import { MentorCard } from "./mentorCard/MentorCard.jsx";
import { MentorDetails } from "./mentorDetails/MentorDetails.jsx";
import styles from "./MentorStats.module.css";

export const MentorStats = () => {
  return (
    <div className={styles.mentorContainer}>
      <h1 className={styles.title}>My Stats</h1>
      <div className={styles.mentorData}>
        <MentorCard />
        <MentorDetails />
      </div>
    </div>
  );
};
