import React from "react";
import { MentorProfile } from "./mentorProfile/MentorProfile.jsx";
import { MentorDetails } from "./mentorDetails/MentorDetails.jsx";
import styles from "./MentorStats.module.css";
import data from "../../../../dummyData.json";

export const MentorStats = () => {
  const mentorData = data.mentors.find((mentor) => mentor._id === "001");

  // WHEN PULLING FROM THE DATABASE USE PARAMS TO GET THE ID >>>
  //  const { id } = useParams();
  // const mentorData = dummyData.mentors.find((mentor) => mentor._id === id);

  return (
    <div className={styles.mentorContainer}>
      <h1 className={styles.title}>My Stats</h1>
      <div className={styles.mentorData}>
        <MentorProfile mentorData={mentorData} />
        <MentorDetails mentorData={mentorData} />
      </div>
    </div>
  );
};
