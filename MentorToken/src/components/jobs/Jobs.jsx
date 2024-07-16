import React, { useState, useRef } from "react";
import { JobList } from "./jobList/JobList";
import { JobsIndicator } from "./jobsIndicator/JobsIndicator";
import { PendingJobs } from "./pendingJobs/PendingJobs";
import styles from "./Jobs.module.css";
import { ApplicationsSent } from "./applicationsSent/ApplicationsSent";

export const Jobs = () => {
  const [activeItem, setActiveItem] = useState(0);
  const indicatorRef = useRef(null);

  const getActiveTab = () => {
    switch (activeItem) {
      case 1:
        return "Done";
      case 2:
        return "Rejected";
      case 3:
        return "In Progress";
      default:
        return "All";
    }
  };

  return (
    <>
      <div className={styles.assignedJobs}>
        <JobsIndicator
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          indicatorRef={indicatorRef}
        />
        <JobList activeTab={getActiveTab()} />
      </div>
      <div className={styles.pendingJobs}>
        <PendingJobs />
        <ApplicationsSent />
      </div>
    </>
  );
};
