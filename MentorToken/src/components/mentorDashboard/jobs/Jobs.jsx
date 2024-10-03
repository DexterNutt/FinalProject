import React, { useState, useRef } from "react";
import { JobList } from "./jobList/JobList";
import { JobsIndicator } from "./jobsIndicator/JobsIndicator";
import { PendingJobs } from "./pendingJobs/PendingJobs";
import { ApplicationsSent } from "./applicationsSent/ApplicationsSent";
import styles from "./Jobs.module.css";

export const Jobs = () => {
  const [activeItem, setActiveItem] = useState(0);
  const indicatorRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.body}>
          <div className={styles.assignedJobs}>
            <JobsIndicator
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              indicatorRef={indicatorRef}
            />
            <JobList activeItem={activeItem} />
          </div>
          <div className={styles.upcomingJobs}>
            <div className={styles.pendingJobs}>
              <PendingJobs />
            </div>
            <div className={styles.applicationsSent}>
              <ApplicationsSent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
