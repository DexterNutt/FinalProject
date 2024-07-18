import React from "react";
import { MentorProfile } from "./mentorProfile/MentorProfile.jsx";
import { MentorDetails } from "./mentorDetails/MentorDetails.jsx";
import styles from "./MentorStats.module.css";

export const MentorStats = () => {
  const mentorData = {
    picture: "/avatars/7.webp",
    name: "Keira Press",
    title: "Sales Representative",
    email: "mentoremail@mail.com",
    phone: "+389 77 663 234",
    skills: ["Sales", "Management", "Problem-solving"],
    details:
      "Lorem ipsum dolor sit amet consectetur. Suspendisse quis varius felis augue adipiscing. Sapien volutpat ac velit facilisis fermentum diam bibendum libero non. Semper morbi at congue pellentesque pharetra amet rhoncus elit quis. Lorem ipsum dolor sit amet consectetur. Suspendisse quis varius felis augue adipiscing. Sapien volutpat ac velit facilisis fermentum diam bibendum libero non. Semper morbi at congue pellentesque pharetra amet rhoncus elit quis. Lorem ipsum dolor sit amet consectetur. Suspendisse quis varius felis augue adipiscing. Sapien volutpat ac velit facilisis fermentum diam bibendum libero non. Semper morbi at congue pellentesque pharetra amet rhoncus elit quis. Lorem ipsum dolor sit amet consectetur. Suspendisse quis varius felis augue adipiscing. Sapien volutpat ac velit facilisis fermentum diam bibendum libero non. Semper morbi at congue pellentesque pharetra amet rhoncus elit quis.",
  };

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
