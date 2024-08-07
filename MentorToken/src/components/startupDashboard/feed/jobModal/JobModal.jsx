import React from "react";
import styles from "./JobModal.module.css";

export const JobModal = ({ job, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src="/vectors/x.svg" alt="" />
        </button>
        <div className={styles.modalHeader}>
          <img
            src={job.companyLogo}
            alt={`${job.companyName} logo`}
            className={styles.modalCompanyLogo}
          />
          <h2 className={styles.modalCompanyName}>{job.companyName}</h2>
        </div>
        <h3 className={styles.modalJobTitle}>{job.jobTitle}</h3>
        <p className={styles.modalJobDescription}>
          {job.jobDescription}
          {job.jobDescription}
          {job.jobDescription}
        </p>
        <button className={styles.applyButton}>Apply</button>
      </div>
    </div>
  );
};
