import React from "react";
import data from "../../../../dummyData.json";
import styles from "./MentorList.module.css";
import { MentorCard } from "../mentorCard/MentorCard";

export const MentorList = () => {
  return (
    <div className={styles.mentorList}>
      {data.companyMentors.map((mentor, index) => (
        <MentorCard key={index} mentor={mentor} />
      ))}
    </div>
  );
};
