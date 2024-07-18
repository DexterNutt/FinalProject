import React from "react";
import styles from "./MentorStats.module.css";
import { MentorProfile } from "../mentorProfile/MentorProfile";

export const MentorStats = () => {
  return (
    <>
      <div className={styles.title}>
        <h1>MyStats</h1>
      </div>
      <div className={styles.profileContainer}>
        <MentorProfile />
      </div>
    </>
  );
};
