import React, { useState } from "react";
import jobsData from "./jobs.json";
import styles from "./JobsOverview.module.css";

export const JobsOverview = () => {
  const [activeTab, setActiveTab] = useState("All");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
  </div>;
};
