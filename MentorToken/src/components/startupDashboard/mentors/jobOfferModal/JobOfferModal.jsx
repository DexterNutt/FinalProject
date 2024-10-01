import React, { useState } from "react";
import styles from "./JobOfferModal.module.css";
import { offerJobToMentor } from "../../../../api/jobsApi";
import { useSelector } from "react-redux";

export const JobOfferModal = ({ mentor, onClose }) => {
  const [jobName, setJobName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { startupData } = useSelector((state) => state.startupDashboard);

  const handleJobNameChange = (e) => {
    setJobName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setShortDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await offerJobToMentor(
        startupData._id,
        mentor._id,
        jobName,
        shortDescription
      );
      onClose();
    } catch (err) {
      setError("Failed to offer the job. Please try again.");
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
        <h2 className={styles.modalTitle}>OFFER JOB</h2>
        <p className={styles.modalSubtitle}>Create and offer job to a mentor</p>

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
            <label className={styles.inputLabel} htmlFor="shortDescription">
              Short Description
            </label>
            <textarea
              id="shortDescription"
              value={shortDescription}
              onChange={handleDescriptionChange}
              className={styles.textAreaField}
              placeholder="Write short description about job offering"
              required
            />
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Job Offer"}
          </button>
        </form>
      </div>
    </div>
  );
};
