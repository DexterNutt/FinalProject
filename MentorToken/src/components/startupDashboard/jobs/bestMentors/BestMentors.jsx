import React from "react";
import styles from "./BestMentors.module.css";
import data from "../../../../dummyData.json";

export const BestMentors = () => {
  const bestMentors = data["best-mentors"];

  return (
    <div className={styles.bestMentors}>
      <p>Best Performing Mentors</p>
      <div className={styles.bestMentorContainer}>
        {bestMentors.map((mentor, index) => {
          return (
            <div key={index} className={styles.bestMentor}>
              <div className={styles.bestMentorLeft}>
                <img src={mentor.imageUrl} alt={`${mentor.mentorName}`} />
                <div className={styles.mentorName}>{mentor.mentorName}</div>
              </div>
              <div className={styles.bestMentorCenter}>
                <div className={styles.achievedJobs}>{mentor.achievedJobs}</div>
                <span>Achieved Jobs</span>
              </div>
              <div className={styles.bestMentorRight}>
                <img src="/vectors/dashboard/arrows-up.svg" alt="Arrow Icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
