import React from "react";
import styles from "./VisitorMentorCard.module.css";

export const VisitorMentorCard = ({ mentorData }) => {
  if (!mentorData) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profile}>
        <div className={styles.picContainer}>
          <img
            src={
              mentorData.photo
                ? `http://localhost:9000${mentorData.photo}`
                : "/user.png"
            }
            alt="User Profile"
            className={styles.profileImage}
          />
          <img
            src="/vectors/verified-mark.svg"
            alt="verified checkmark"
            className={styles.verifiedCheck}
          />
        </div>

        <div className={styles.mentorName}>
          <p>{mentorData.mentorName}</p>
          <img
            src="/vectors/socials/radix-icons_linkedin-logo.svg"
            alt="LinkedIn logo"
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
  );
};
