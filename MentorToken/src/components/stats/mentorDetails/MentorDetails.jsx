import React from "react";
import styles from "./MentorDetails.module.css";

export const MentorDetails = () => {
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
    <>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsHeader}>
          <span>About</span>
          <img src="/vectors/edit.svg" alt="edit icon" />
        </div>
        <div className={styles.details}>
          <h3>Skills: {mentorData.skills.join(" | ")}</h3>
          <p>{mentorData.details}</p>
        </div>
      </div>
    </>
  );
};
