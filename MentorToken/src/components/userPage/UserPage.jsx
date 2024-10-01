import React, { useState, useEffect } from "react";
import styles from "./UserPage.module.css";
import { VisitorMentorCard } from "./visitorMentorCard/VisitorMentorCard";
import { VisitorMentorDetails } from "./visitorMentorDetails/VisitorMentorDetails";
import { JobOfferModal } from "../startupDashboard/mentors/jobOfferModal/JobOfferModal";
import { getToken } from "../../config/StorageFunctions";
import { jwtDecode } from "jwt-decode";

export const UserPage = ({ selectedMentor, onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const fetchUserRole = () => {
    const token = getToken();
    if (token) {
      const decodedToken = jwtDecode(token);
      const role = decodedToken.role;
      setUserRole(role);
    }
  };

  useEffect(() => {
    fetchUserRole();
  }, []);

  const handleViewMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!selectedMentor) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.userPage}>
      <div className={styles.body}>
        <VisitorMentorCard mentorData={selectedMentor} />
        <VisitorMentorDetails mentorData={selectedMentor} />

        {userRole === "startup" && (
          <button onClick={handleViewMore} className={styles.offerJobButton}>
            Offer Job
          </button>
        )}

        <button onClick={onBack} className={styles.backButton}>
          Back to Dashboard
        </button>
      </div>

      {isModalOpen && (
        <JobOfferModal mentor={selectedMentor} onClose={handleCloseModal} />
      )}
    </div>
  );
};
