import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApplications } from "../../applicationsSlice";
import styles from "./JobList.module.css";

export const JobList = ({ activeItem }) => {
  const dispatch = useDispatch();
  const { applications, loading, error } = useSelector(
    (state) => state.applications
  );

  useEffect(() => {
    dispatch(fetchApplications());
  }, [dispatch]);

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const statusClassMap = {
    done: styles.done,
    rejected: styles.rejected,
    "in progress": styles.inProgress,
  };

  const filteredApplications = applications.filter((application) => {
    switch (activeItem) {
      case 0:
        return application.status !== "pending";
      case 1:
        return application.status === "done";
      case 2:
        return application.status === "rejected";
      case 3:
        return application.status === "in progress";
      default:
        return false;
    }
  });

  return (
    <div className={styles.dashboardJobs}>
      <div className={styles.jobList}>
        {filteredApplications.map((application) => (
          <div key={application._id} className={styles.job}>
            <p>{application.title}</p>
            <div
              className={`${styles.status} ${
                statusClassMap[application.status]
              }`}
            >
              {application.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
