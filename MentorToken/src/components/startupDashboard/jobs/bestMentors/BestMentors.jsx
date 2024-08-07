import React from "react";
import styles from "BestMentors.module.css";
import data from "../../../../dummyData.json";

export const BestMentors = () => {
  return (
    <div className={styles.bestMentors}>
      <p>Best Performing Mentors</p>
      <div className={styles.bestMentorContainer}>
        {data.map((mentor, index) => {
          return (
            <div key={index} className={styles.bestMentor}>
              <div className={styles.bestMentorLeft}>
                <img src={mentor.imageUrl} alt="" />
                {mentor.mentorName}
              </div>
              <div className={styles.bestMentorCenter}>
                <div className={styles.achievedJobs}>
                  {" "}
                  {mentor.achievedJobs}
                </div>{" "}
                <span>Achieved Jobs</span>
              </div>
              <div className={styles.bestMentorRight}>
                <img src="/mentor-arrows.svg" alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
