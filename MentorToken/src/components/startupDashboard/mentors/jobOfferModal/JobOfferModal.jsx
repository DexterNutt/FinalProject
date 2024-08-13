import React, { useState } from "react";
import styles from "./JobOfferModal.module.css";

export const JobOfferModal = ({ mentor, onClose }) => {
  const [jobName, setJobName] = useState("");
  const [shortDescription, setShortDescription] = useState("");

  const handleJobNameChange = (e) => {
    setJobName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setShortDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Job Name:", jobName);
    console.log("Short Description:", shortDescription);
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src="/vectors/x.svg" alt="Close" />
        </button>
        <h2 className={styles.modalTitle}>OFFER JOB</h2>
        <p className={styles.modalSubtitle}>Create and offer job to a mentor</p>
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
          <button type="submit" className={styles.submitButton}>
            Send Job Offer
          </button>
        </form>
      </div>
    </div>
  );
};
