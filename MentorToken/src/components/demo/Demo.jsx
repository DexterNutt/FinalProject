import React from "react";
import styles from "./Demo.module.css";

export const Demo = () => {
  return (
    <div className={styles.demo}>
      <div className={styles.text}>
        <h3>
          Every <span>success</span> is rewarded!
        </h3>
      </div>
      <div className={styles.image}>
        <img src="/group.webp" alt="group" />
      </div>
      <div className={styles.demoContainer}>
        <img src="/mentors.webp" alt="mentors" />
      </div>
    </div>
  );
};
