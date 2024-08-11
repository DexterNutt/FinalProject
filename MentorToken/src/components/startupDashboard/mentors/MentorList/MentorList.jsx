import React from "react";
import data from "../../../../dummyData.json";
import styles from "./MentorList.module.css";
import { MentorCard } from "../mentorCard/MentorCard";

export const MentorList = () => {
  const bestMentorRating = Math.max(
    ...data.mentors.map((mentor) => mentor.average)
  );

  return (
    <div className={styles.mentorList}>
      {data.mentors.map((mentor, index) => (
        <MentorCard
          key={index}
          mentor={mentor}
          isBest={mentor.average === bestMentorRating}
        />
      ))}
    </div>
  );
};
