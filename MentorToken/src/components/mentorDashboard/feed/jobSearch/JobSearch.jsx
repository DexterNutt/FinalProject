import React from "react";
import styles from "./JobsSearch.module.css";

export const JobsSearch = () => {
  return (
    <div className={styles.jobsSearchContainer}>
      <div className={styles.title}>
        <h1>Your Startup Jobs</h1>
      </div>
      <div className="searchTabs">
        <div className="left">
          <div className="sortBy"></div>
          <div className="category"></div>
        </div>
        <div className="right">
          <div className="filters"></div>
          <div className="renderList"></div>
        </div>
      </div>
    </div>
  );
};
