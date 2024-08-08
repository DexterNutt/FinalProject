import React, { useState } from "react";
import styles from "./JobCard.module.css";
import { JobModal } from "../jobModal/JobModal";

export const JobCard = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
        <div className={styles.bottom}>
          <div className={styles.applicantsContainer}>
            <div className={styles.applicants}>
              {job.applicants.map((applicant, index) => (
                <img
                  key={index}
                  src={applicant.imageUrl}
                  alt={`Applicant ${index + 1}`}
                  className={styles.applicantPic}
                />
              ))}
            </div>
            <span className={styles.applicantCount}>3+ Applicants</span>
          </div>
          <button className={styles.viewMoreButton} onClick={handleViewMore}>
            View More
          </button>
        </div>
      </div>
      {isModalOpen && <JobModal job={job} onClose={handleCloseModal} />}
    </>
  );
};
