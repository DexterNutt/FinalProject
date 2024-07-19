import React from "react";
import styles from "./JobCard.module.css";

export const JobCard = ({ job }) => {
  return (
    <div className={styles.JobCard}>
      <div className={styles.companyHeader}>
        <img
          src={job.companyLogo}
          alt={`${job.companyName} logo`}
          className={styles.companyLogo}
        />
        <h2 className={styles.companyName}>{job.companyName}</h2>
      </div>
      <h3 className={styles.jobTitle}>{job.jobTitle}</h3>
      <p className={styles.jobDescription}>{job.jobDescription}</p>
      <button className={styles.viewMoreButton}>View More</button>
    </div>
  );
};
