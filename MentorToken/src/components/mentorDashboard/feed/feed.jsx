import React from "react";
import { JobList } from "./jobList/JobList.jsx";
import styles from "./Feed.module.css";
import { JobSearch } from "./jobSearch/JobSearch.jsx";

export const Feed = ({ userData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.body}>
          <JobSearch />
          <JobList />
        </div>
      </div>
    </div>
  );
};
