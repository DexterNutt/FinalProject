import React from "react";
import styles from "./QuickOverview.module.css"; // Import the CSS module

export const QuickOverview = ({
  totalJobs,
  assignedJobs,
  appliedJobs,
  finishedJobs,
}) => {
  return (
    <div className={styles.compContainer}>
      <h2 className={styles.title}>Quick Overview</h2>
      <div className={styles.item}>
        <span className={styles.label}>Total Jobs</span>
        <span className={styles.value}>{totalJobs}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.label}>Total Assigned Jobs</span>
        <span className={styles.value}>{assignedJobs}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.label}>Jobs That You Have Applied</span>
        <span className={styles.value}>{appliedJobs}</span>
      </div>
      <div className={`${styles.item} ${styles.finishedJobs}`}>
        <span className={styles.label}>Finished Jobs</span>
        <span className={styles.value}>{finishedJobs}</span>
      </div>
    </div>
  );
};
