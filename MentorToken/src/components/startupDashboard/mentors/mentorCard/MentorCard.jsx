import React from "react";
import styles from "./MentorCard.module.css";

export const MentorCard = ({ mentor }) => {
  return (
    <div className={styles.mentorCard}>
      <div className={styles.mentorContainer}>
        <div className={styles.mentorImage}>
          <img src={mentor.imageUrl} alt="mentor profile img" />
        </div>
        <div className={styles.mentorDetails}>
          <div className={styles.name}>
            <h3>{mentor.name}</h3>
            <img src="/vectors/socials/linkedin.svg" alt="linkedin logo" />
          </div>
          <span className={styles.average}>
            {mentor.average} average based on KPI success rate.
          </span>
          <span className={styles.skills}>
            Skills: {mentor.skills.join(" | ")}
          </span>
          <span className={styles.about}>{mentor.about}</span>
        </div>
        <div className={styles.viewMentor}>
          <button>View Mentor</button>
        </div>
      </div>
    </div>
  );
};
