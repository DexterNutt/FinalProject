import React, { useState, useEffect } from "react";
import styles from "./JobList.module.css";
import { JobCard } from "../jobCard/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../jobsSlice";

export const JobList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const jobsPerPage = 8;
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const startIndex = currentPage * jobsPerPage;

  const availableJobs = jobs.filter((job) => job.jobStatus === "available");

  const displayedJobs = availableJobs.slice(
    startIndex,
    startIndex + jobsPerPage
  );

  const handleNextPage = () => {
    if (startIndex + jobsPerPage < jobs.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.jobList}>
      <div className={styles.body}>
        {displayedJobs.length > 0 ? (
          displayedJobs.map((job) => <JobCard key={job._id} job={job} />)
        ) : (
          <p>No jobs available.</p>
        )}
      </div>

      <div className={styles.buttonsContainer}>
        {startIndex + jobsPerPage < jobs.length && (
          <button className={styles.viewMoreButton} onClick={handleNextPage}>
            Next
          </button>
        )}
        {currentPage > 0 && (
          <button
            className={styles.viewMoreButton}
            onClick={handlePreviousPage}
          >
            Previous
          </button>
        )}
      </div>
    </div>
  );
};
