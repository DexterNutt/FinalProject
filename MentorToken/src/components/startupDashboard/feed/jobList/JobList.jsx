import React, { useState, useEffect, useRef } from "react";
import styles from "./JobList.module.css";
import { JobCard } from "../jobCard/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { JobCreateModal } from "../jobCreateModal/JobCreateModal";
import { fetchJobsByStartup } from "../../../mentorDashboard/jobsSlice";
import { fetchApplicationsToJob } from "../../../mentorDashboard/applicationsSlice";

export const JobList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const jobsPerPage = 8;
  const dispatch = useDispatch();

  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const { applicationsToJob } = useSelector((state) => state.applications);
  const { startupData } = useSelector((state) => state.startupDashboard);

  const startupId = startupData._id;

  useEffect(() => {
    if (startupId) {
      dispatch(fetchJobsByStartup(startupId));
    }
  }, [dispatch, startupId]);

  const applicationsFetched = useRef(false);

  useEffect(() => {
    if (jobs.length > 0 && !applicationsFetched.current) {
      jobs.forEach((job) => {
        dispatch(fetchApplicationsToJob(job._id));
      });
      applicationsFetched.current = true;
    }
  }, [dispatch, jobs]);

  const availableJobs = jobs.filter((job) => job.jobStatus === "available");

  const startIndex = currentPage * jobsPerPage;

  const displayedJobs = availableJobs.slice(
    startIndex,
    startIndex + jobsPerPage
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleCreateJob = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    dispatch(fetchJobsByStartup(startupId));
  };

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
      <div className={styles.title}>
        <p>Your Startup Jobs</p>
        <button className={styles.createJobButton} onClick={handleCreateJob}>
          <img src="/vectors/dashboard/plus.svg" alt="plus icon" />
          Create New Job
        </button>
      </div>

      <div className={styles.body}>
        {displayedJobs.length > 0 ? (
          displayedJobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
              applicants={applicationsToJob[job._id] || []}
            />
          ))
        ) : (
          <p>No jobs found for this startup.</p>
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

      {isModalOpen && <JobCreateModal onClose={handleCloseModal} />}
    </div>
  );
};
