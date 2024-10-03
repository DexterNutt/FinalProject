import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./JobModal.module.css";
import { submitApplication } from "../../applicationsSlice";
import { jwtDecode } from "jwt-decode";
import { getToken } from "../../../../config/StorageFunctions";

export const JobModal = ({ job, onClose }) => {
  const dispatch = useDispatch();

  const token = getToken();
  const decodedToken = jwtDecode(token);
  const mentorId = decodedToken.id;

  const handleApply = () => {
    const applicationData = {
      jobId: job._id,
      mentorId,
      title: job.title,
      applicationType: "mentorToCompany",
    };

    dispatch(submitApplication(applicationData))
      .then(() => {
        alert("Application submitted successfully!");
        onClose();
      })
      .catch((err) => {
        console.error("Error submitting application:", err);
        alert("Failed to submit application, please try again.");
      });
  };

  const startupId = job.startupId || {};
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src="/vectors/x.svg" alt="Close" />
        </button>
        <div className={styles.modalHeader}>
          <img
            src={job.photo ? `http://localhost:9000${job.photo}` : "/work.png"}
            alt={`${startupId.startupName || "Unnamed Startup"} logo`}
            className={styles.companyLogo}
          />
          <h2 className={styles.companyName}>
            {startupId.startupName || "Unnamed Startup"}
          </h2>
        </div>
        <h3 className={styles.modalJobTitle}>{job.title}</h3>
        <p className={styles.modalJobDescription}>{job.description}</p>

        <button className={styles.applyButton} onClick={handleApply}>
          Apply
        </button>
      </div>
    </div>
  );
};
