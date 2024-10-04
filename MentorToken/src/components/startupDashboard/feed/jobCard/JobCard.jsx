import React, { useState } from "react";
import styles from "./JobCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { JobModal } from "../jobModal/JobModal";
import { fetchApplicationsToJob } from "../../../mentorDashboard/applicationsSlice";

export const JobCard = ({ job, applicants }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const { applicationsToJob, loading, error } = useSelector(
    (state) => state.applications
  );

  const handleViewMore = () => {
    dispatch(fetchApplicationsToJob(job._id));
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const startupId = job.startupId || {};

  console.log("APPLICANTS:", applicants);

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
          <div className={styles.bottomContainer}>
            <div className={styles.applicantsContainer}>
              <div className={styles.applicants}>
                {applicants.length > 0 ? (
                  applicants.map((applicant, i) => (
                    <img
                      key={applicant._id || i}
                      src={
                        applicant.mentorId.photo
                          ? `http://localhost:9000${applicant.mentorId.photo}`
                          : `/user.png`
                      }
                      className={styles.applicantPic}
                    />
                  ))
                ) : (
                  <span className={styles.applicantCount}>No Applicants</span>
                )}
              </div>
              {applicants.length > 0 && (
                <span className={styles.applicantCount}>
                  {applicants.length} Applicants
                </span>
              )}
            </div>
          </div>
          <button className={styles.viewMoreButton} onClick={handleViewMore}>
            View More
          </button>
        </div>
      </div>

      {isModalOpen && (
        <JobModal
          job={job}
          applications={applicationsToJob[job._id] || []}
          onClose={handleCloseModal}
          loading={loading}
          error={error}
        />
      )}
    </>
  );
};
