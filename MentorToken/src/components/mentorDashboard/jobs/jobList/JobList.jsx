import React from "react";
import jobsData from "./jobs.json";
import styles from "./JobList.module.css";

export const JobList = ({ activeTab }) => {
  return (
    <div className={styles.dashboardJobs}>
      <div className={styles.jobList}>
        {jobsData
          .filter((job) => {
            if (activeTab === "All") return true;
            return job.status === activeTab;
          })
          .map((job, index) => (
            <div key={index} className={styles.job}>
              <p>{job.task}</p>
              <div
                className={`${styles.status} ${
                  styles[job.status.replace(/\s+/g, "")]
                }`}
              >
                {job.status}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
