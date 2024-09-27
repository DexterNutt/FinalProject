import React from "react";
import { JobList } from "./jobList/JobList";
import styles from "./Feed.module.css";

export const Feed = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.body}>
          <JobList />
        </div>
      </div>
    </div>
  );
};
