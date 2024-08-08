import React from "react";
import data from "../../../../dummyData.json";
import styles from "./JobList.module.css";
import { JobCard } from "../jobCard/JobCard";

export const JobList = () => {
  const handleViewMore = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.jobList}>
      <div className={styles.title}>
        <p>Your Startup Jobs</p>
        <button className={styles.creteJobButton} onClick={handleViewMore}>
          <img src="/vectors/dashboard/plus.svg" alt="plus icon" />
          Create New Job
        </button>
      </div>
      {data.jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};
