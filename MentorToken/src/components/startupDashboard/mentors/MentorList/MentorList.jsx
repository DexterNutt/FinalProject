import React from "react";
import data from "../../../../dummyData.json";
import styles from "./MentorList.module.css";
import { MentorTab } from "../mentorTab/MentorTab";

export const MentorList = ({ onMentorClick }) => {
  const bestMentorRating = Math.max(
    ...data.mentors.map((mentor) => mentor.average)
  );

  return (
    <div className={styles.mentorList}>
      {data.mentors.map((mentor, index) => (
        <MentorTab
          key={index}
          mentor={mentor}
          isBest={mentor.average === bestMentorRating}
          onClick={() => onMentorClick(mentor)}
        />
      ))}
    </div>
  );
};
