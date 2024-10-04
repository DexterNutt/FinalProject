import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchApplicationsToJob,
  acceptJobOffer,
  rejectJobOffer,
} from "../../../mentorDashboard/applicationsSlice";

import styles from "./JobModal.module.css";

export const JobModal = ({ job, onClose }) => {
  const dispatch = useDispatch();
  const { applicationsToJob, loading, error } = useSelector(
    (state) => state.applications
  );

  useEffect(() => {
    if (job && job._id) {
      dispatch(fetchApplicationsToJob(job._id));
    }
  }, [dispatch, job]);

  const startupId = job.startupId;

  const handleAccept = async (applicationId) => {
    await dispatch(acceptJobOffer(applicationId));
    onClose();
  };

  const handleReject = (applicationId) => {
    dispatch(rejectJobOffer(applicationId));
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src="/vectors/x.svg" alt="Close" />
        </button>
        <div className={styles.modalHeader}>
          <img
            src={
              startupId.photo
                ? `http://localhost:9000${startupId.photo}`
                : "/work.png"
            }
            className={styles.modalCompanyLogo}
            alt={job.startupName}
          />
          <h2 className={styles.modalCompanyName}>{job.startupName}</h2>
        </div>
        <h3 className={styles.modalJobTitle}>{job.title}</h3>
        <p className={styles.modalJobDescription}>{job.description}</p>

        {loading ? (
          <p>Loading applicants...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <h4 className={styles.mentorsTitle}>
              Mentors That Applied To The Job
            </h4>
            <div className={styles.mentorsList}>
              {applicationsToJob.length === 0 ? (
                <p className={styles.noApplicants}>No applicants yet.</p>
              ) : (
                applicationsToJob.slice(0, 5).map((applicant) => (
                  <div key={applicant._id} className={styles.mentorCard}>
                    <img
                      src={
                        applicant.mentorId.photo
                          ? `http://localhost:9000${applicant.mentorId.photo}`
                          : "/default-mentor.png"
                      }
                      alt={`Mentor ${applicant.mentorId.name}`}
                      className={styles.mentorImage}
                    />
                    <div className={styles.mentorInfo}>
                      <h5 className={styles.mentorName}>
                        {applicant.mentorId.name}
                      </h5>
                      <p className={styles.mentorSkills}>
                        Skills: {applicant.mentorId.skills.join(", ")}
                      </p>
                    </div>
                    <div className={styles.mentorActions}>
                      <button
                        className={styles.assignButton}
                        onClick={() => handleAccept(applicant._id)}
                      >
                        Assign Job
                      </button>
                      <button
                        className={styles.rejectButton}
                        onClick={() => handleReject(applicant._id)}
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
