import React from "react";
import { useSelector } from "react-redux";
import styles from "./MentorCard.module.css";

export const MentorCard = () => {
  const { userData } = useSelector((state) => state.mentorDashboard);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profile}>
        <div className={styles.picContainer}>
          <img
            src={
              userData.photo
                ? `http://localhost:9000${userData.photo}`
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
          <p>{userData.mentorName}</p>
          <img
            src="/vectors/socials/radix-icons_linkedin-logo.svg"
            alt="LinkedIn logo"
          />
        </div>

        <div className={styles.mentorTitle}>
          <p>{userData.title}</p>
        </div>

        <div className={styles.mentorEmail}>
          <img src="/vectors/dashboard/mail.svg" alt="mail icon" />
          <p>{userData.email}</p>
        </div>

        <div className={styles.mentorPhone}>
          <img src="/vectors/dashboard/phone.svg" alt="phone icon" />
          <p>{userData.phone}</p>
        </div>
      </div>
    </div>
  );
};
