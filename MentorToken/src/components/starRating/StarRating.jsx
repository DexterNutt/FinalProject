import React from "react";
import styles from "./StarRating.module.css";

export const StarRating = ({ rating, totalStars = 5 }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = totalStars - fullStars;

  return (
    <div className={styles.starRating}>
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <img key={i} className={styles.star} src="/vectors/stars/full.svg" />
        ))}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <img
            key={i + fullStars + 1}
            className={`${styles.star} ${styles.emptyStar}`}
            src="/vectors/stars/empty.svg"
          />
        ))}
    </div>
  );
};
