import React, { useState, useRef } from "react";
import { SearchBar } from "../../search/Search";
import { UserProfile } from "../../userProfile/UserProfile";
import { JobList } from "./jobList/JobList";
import { JobsIndicator } from "./jobsIndicator/JobsIndicator";
import { StartupChart } from "./startupChart/StartupChart";

import styles from "./Jobs.module.css";

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
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <SearchBar />
          <UserProfile />
        </div>
        <div className={styles.body}>
          <div className={styles.assignedJobs}>
            <JobsIndicator
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              indicatorRef={indicatorRef}
            />
            <JobList activeTab={getActiveTab()} />
          </div>
          <div className={styles.contentRight}>
            <div className={styles.mentors}>Best Performing Mentors</div>
            <div className={styles.statistics}>
              <StartupChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};