import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchApplicationsByMentor } from "../../applicationsSlice";
import styles from "./ApplicationsSent.module.css";

export const ApplicationsSent = () => {
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.mentorDashboard);
  const mentorId = userData?._id;

  const {
    applications = [],
    loading,
    error,
  } = useSelector((state) => state.applications);

  useEffect(() => {
    if (mentorId) {
      dispatch(fetchApplicationsByMentor(mentorId));
    }
  }, [dispatch, mentorId]);

  const applicationsSent = applications
    .filter((application) => application.applicationType === "mentorToCompany")
    .filter((sentApp) => sentApp.status === "pending");

  return (
    <div className={styles.applicationsSentContainer}>
      <h2 className={styles.title}>Applications Sent</h2>
      <p className={styles.subtitle}>Jobs you have applied to</p>

      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.jobList}>
        {applicationsSent.length > 0 ? (
          applicationsSent.map((application, index) => (
            <div key={index} className={styles.job}>
              <p>{application.title}</p>
              <div className={styles.pendingIcon}></div>
            </div>
          ))
        ) : (
          <p>No applications sent at the moment.</p>
        )}
      </div>
    </div>
  );
};
