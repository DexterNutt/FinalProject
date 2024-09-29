import React from "react";
import styles from "./UserPage.module.css";
import { VisitorMentorCard } from "./visitorMentorCard/VisitorMentorCard";
import { VisitorMentorDetails } from "./visitorMentorDetails/VisitorMentorDetails";

export const UserPage = ({ selectedMentor, onBack }) => {
  if (!selectedMentor) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.userPage}>
      <div className={styles.body}>
        <VisitorMentorCard mentorData={selectedMentor} />
        <VisitorMentorDetails mentorData={selectedMentor} />
        <button onClick={onBack} className={styles.backButton}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};
