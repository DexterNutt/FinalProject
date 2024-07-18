import React from "react";
import styles from "./MentorProfile.module.css";

export const MentorProfile = () => {
  const mentorData = {
    picture: "/avatars/7.webp",
    name: "Keira Press",
    title: "Sales Representative",
    email: "mentoremail@mail.com",
    phone: "+389 77 663 234",
    skills: ["Sales", "Management", "Problem-solving"],
  };

  return (
    <>
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <div className={styles.picContainer}>
            <img
              src={mentorData.picture}
              alt="mentor profile picture"
              className={styles.profileImage}
            />
            <img
              src="/vectors/verified-mark.svg"
              alt="green verified checkmark "
              className={styles.verifiedCheck}
            />
          </div>
          <div className={styles.mentorName}>
            <p>{mentorData.name}</p>
            <img
              src="/vectors/socials/radix-icons_linkedin-logo.svg"
              alt="linkedIn logo "
            />
          </div>
          <div className={styles.mentorTitle}>
            <p>{mentorData.title}</p>
          </div>
          <div className={styles.mentorEmail}>
            <img src="/vectors/dashboard/mail.svg" alt="mail icon" />
            <p>{mentorData.email}</p>
          </div>
          <div className={styles.mentorPhone}>
            <img src="/vectors/dashboard/phone.svg" alt="phone icon" />
            <p>{mentorData.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
};
