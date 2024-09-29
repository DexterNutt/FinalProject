import React, { useState } from "react";
import styles from "./MentorDetailsVisitor.module.css";
import { JobOfferModal } from "../jobOfferModal/JobOfferModal";

export const MentorDetailsVisitor = ({ mentorData, onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsHeader}>
          <span>About Mentor</span>
          <button className={styles.offerJobButton} onClick={handleViewMore}>
            <img src="/vectors/dashboard/plus.svg" alt="plus icon" />
            Offer New Job
          </button>
        </div>
        <div className={styles.details}>
          <h3>Skills: {mentorData.skills.join(" | ")}</h3>
          <p>{mentorData.details}</p>
        </div>
      </div>
      {isModalOpen && (
        <JobOfferModal mentor={mentorData} onClose={handleCloseModal} />
      )}
    </>
  );
};
