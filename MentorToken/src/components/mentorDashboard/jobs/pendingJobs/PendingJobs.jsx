import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styles from "./PendingJobs.module.css";

import {
  fetchApplications,
  acceptJobOffer,
  rejectJobOffer,
} from "../../applicationsSlice";

export const PendingJobs = () => {
  const dispatch = useDispatch();
  const { applications, loading, error } = useSelector(
    (state) => state.applications
  );

  useEffect(() => {
    dispatch(fetchApplications());
  }, [dispatch]);

  useEffect(() => {
    console.log("Fetched Applications:", applications);
  }, [applications]);

  const pendingJobs = applications.filter(
    (application) =>
      application.status === "pending" &&
      application.applicationType === "companyToMentor"
  );

  const handleAccept = async (applicationId) => {
    await dispatch(acceptJobOffer(applicationId));
    dispatch(fetchApplications());
  };

  const handleReject = async (applicationId) => {
    await dispatch(rejectJobOffer(applicationId));
    dispatch(fetchApplications());
  };

  return (
    <div className={styles.pendingJobsContainer}>
      <h2 className={styles.title}>Pending Job Applications</h2>
      <p className={styles.subtitle}>Jobs offered from your startup</p>

      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.jobList}>
        {pendingJobs.length > 0 ? (
          pendingJobs.map((application, index) => (
            <div key={index} className={styles.job}>
              <p>{application.title}</p>
              <div className={styles.actions}>
                <button
                  className={`${styles.button} ${styles.accept}`}
                  onClick={() => handleAccept(application._id)}
                >
                  Accept
                </button>
                <button
                  className={`${styles.button} ${styles.reject}`}
                  onClick={() => handleReject(application._id)}
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No pending job offers at the moment.</p>
        )}
      </div>
    </div>
  );
};
