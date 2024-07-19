import React from "react";
import styles from "./ApplicationsSent.module.css";

export const ApplicationsSent = () => {
  const jobs = [
    { title: "Revenue per rate" },
    { title: "ARPU (Average revenue per use)" },
    { title: "CAC (Custom Acquisition Cost)" },
  ];

  return (
    <div className={styles.applicationsSentContainer}>
      <h2 className={styles.title}>Applications Sent</h2>
      <p className={styles.subtitle}>Jobs you have applied to</p>
      <div className={styles.jobList}>
        {jobs.map((job, index) => (
          <div key={index} className={styles.job}>
            <p>{job.title}</p>
            <div className={styles.pendingIcon}></div>
          </div>
        ))}
      </div>
    </div>
  );
};
