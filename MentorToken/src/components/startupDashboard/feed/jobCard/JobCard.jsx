import React, { useState } from "react";
import styles from "./JobCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { JobModal } from "../jobModal/JobModal";
import { fetchApplications } from "../../../mentorDashboard/applicationsSlice";

export const JobCard = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const { applications, loading, error } = useSelector(
    (state) => state.applications
  );

  const handleViewMore = () => {
    dispatch(fetchApplications(job._id));
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const startupId = job.startupId || {};

  return (
    <>
      <div className={styles.JobCard}>
        <div className={styles.companyHeader}>
          <img
            src={
              startupId.photo
                ? `http://localhost:9000${startupId.photo}`
                : "/work.png"
            }
            alt={`${startupId.startupName || "Unnamed Startup"} logo`}
            className={styles.companyLogo}
          />
          <h2 className={styles.companyName}>
            {startupId.startupName || "Unnamed Startup"}
          </h2>
        </div>
        <h3 className={styles.jobTitle}>{job.title}</h3>
        <p className={styles.jobDescription}>{job.description}</p>
        <div className={styles.bottom}>
          <div className={styles.applicantsContainer}>
            <div className={styles.applicants}>
              {job.applicants &&
                job.applicants.map((applicant, i) => (
                  <img
                    key={applicant._id || i}
                    src={applicant.photo}
                    alt={`Applicant ${i + 1}`}
                    className={styles.applicantPic}
                  />
                ))}
            </div>
            <span className={styles.applicantCount}>
              {job.applicants?.length || 0} Applicants
            </span>
          </div>
          <button className={styles.viewMoreButton} onClick={handleViewMore}>
            View More
          </button>
        </div>
      </div>
      {isModalOpen && (
        <JobModal
          job={job}
          applications={applications}
          onClose={handleCloseModal}
          loading={loading}
          error={error}
        />
      )}
    </>
  );
};
