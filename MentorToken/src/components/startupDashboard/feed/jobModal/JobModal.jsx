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
        <p className={styles.modalJobDescription}>{job.jobDescription}</p>
        <h4 className={styles.mentorsTitle}>Mentors That Applied To The Job</h4>
        <div className={styles.mentorsList}>
          {job.applicants.map((applicant, index) => (
            <div key={index} className={styles.mentorCard}>
              <img
                src={applicant.imageUrl}
                alt={`Mentor ${index + 1}`}
                className={styles.mentorImage}
              />
              <div className={styles.mentorInfo}>
                <h5 className={styles.mentorName}>{applicant.mentorName}</h5>
                <p className={styles.mentorSkills}>
                  Skills: {applicant.skills}
                </p>
              </div>
              <div className={styles.mentorActions}>
                <button className={styles.assignButton}>Assign Job</button>
                <button className={styles.rejectButton}>Reject</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
