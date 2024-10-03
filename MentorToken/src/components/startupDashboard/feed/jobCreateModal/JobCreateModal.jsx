import React, { useState } from "react";
import styles from "./JobCreateModal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { createJob } from "../../../mentorDashboard/jobsSlice";

export const JobCreateModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { startupData } = useSelector((state) => state.startupDashboard);
  const [jobName, setJobName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const startupId = startupData._id;

  const handleJobNameChange = (e) => {
    setJobName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const newJob = {
      jobName,
      description,
      startupId: startupData._id,
      photo: startupData.photo,
    };

    try {
      await dispatch(createJob(newJob)).unwrap();
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src="/vectors/exit.svg" alt="Close" />
        </button>
        <h2 className={styles.modalTitle}>CREATE JOB</h2>
        <p className={styles.modalSubtitle}>
          Fill in the details to create a new job
        </p>

        {error && <p className={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.inputNameLabel} htmlFor="jobName">
              Job Name
            </label>
            <input
              type="text"
              id="jobName"
              value={jobName}
              onChange={handleJobNameChange}
              className={styles.inputField}
              placeholder="Enter job name"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel} htmlFor="description">
              Short Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              className={styles.textAreaField}
              placeholder="Write short description about job"
              required
            />
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Job"}
          </button>
        </form>
      </div>
    </div>
  );
};
