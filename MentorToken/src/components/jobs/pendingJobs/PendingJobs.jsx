import React from "react";
import styles from "./PendingJobs.module.css";

export const PendingJobs = () => {
  const jobs = [
    { title: "Revenue per rate" },
    { title: "ARPU (Average revenue per use)" },
    { title: "CAC (Custom Acquisition Cost)" },
  ];

  return (
    <div className={styles.pendingJobsContainer}>
      <h2 className={styles.title}>Pending Jobs</h2>
      <p className={styles.subtitle}>Jobs offered from your startup</p>
      <div className={styles.jobList}>
        {jobs.map((job, index) => (
          <div key={index} className={styles.job}>
            <p>{job.title}</p>
            <div className={styles.actions}>
              <button className={`${styles.button} ${styles.accept}`}>
                Accept
              </button>
              <button className={`${styles.button} ${styles.reject}`}>
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
