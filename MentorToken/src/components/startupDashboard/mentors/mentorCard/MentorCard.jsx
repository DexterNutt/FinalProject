import React from "react";
import styles from "./MentorCard.module.css";
import { StarRating } from "../../../starRating/StarRating";

export const MentorCard = ({ mentor, isBest }) => {
  return (
    <div className={styles.mentorCard}>
      <div className={styles.mentorContainer}>
        <div
          className={`${styles.mentorImageContainer} ${
            isBest ? styles.bestMentor : ""
          }`}
        >
          {isBest && (
            <img
              src="/vectors/dashboard/ring.svg"
              alt="best mentor ring"
              className={styles.bestMentorRing}
            />
          )}
          <img
            src={mentor.imageUrl}
            className={styles.mentorImage}
            alt="mentor profile img"
          />
        </div>
        <div className={styles.mentorDetails}>
          <div className={styles.name}>
            <h3>{mentor.name}</h3>
            <img
              src="/vectors/socials/linkedInPurple.svg"
              alt="linkedin logo"
            />
          </div>
          <div className={styles.average}>
            <StarRating rating={mentor.average} />
            <span>{mentor.average} average based on KPI success rate.</span>
          </div>
          <span className={styles.skills}>
            Skills: {mentor.skills.join(" | ")}
          </span>
          <span className={styles.about}>{mentor.about}</span>
        </div>
        <div className={styles.viewMentor}>
          {isBest && (
            <span className={styles.trending}>
              <img src="/vectors/dashboard/badge.svg" alt="best mentor badge" />
              TRENDING
            </span>
          )}
          <button>View Mentor</button>
        </div>
      </div>
    </div>
  );
};
