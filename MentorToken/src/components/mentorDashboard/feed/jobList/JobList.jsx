import React from "react";
import data from "../../../../dummyData.json";
import styles from "./JobList.module.css";
import { JobCard } from "../jobCard/JobCard";

export const JobList = () => {
  return (
    <div className={styles.jobList}>
      {data.jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};
