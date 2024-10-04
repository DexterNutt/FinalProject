import React, { useState } from "react";
import styles from "./Demo.module.css";

export const Demo = () => {
  const [groupImageLoaded, setGroupImageLoaded] = useState(false);
  const [mentorsImageLoaded, setMentorsImageLoaded] = useState(false);

  const handleGroupImageLoad = () => {
    setGroupImageLoaded(true);
  };

  const handleMentorsImageLoad = () => {
    setMentorsImageLoaded(true);
  };

  return (
    <div className={styles.demo}>
      <div className={styles.text}>
        <h3>
          Every <span>success</span> is rewarded!
        </h3>
      </div>
      <div className={styles.image}>
        <img
          src="/group.webp"
          alt="group"
          className={groupImageLoaded ? styles.loaded : styles.loadingImage}
          onLoad={handleGroupImageLoad}
        />
      </div>
      <div className={styles.demoContainer}>
        <img
          src="/mentors.webp"
          alt="mentors"
          className={mentorsImageLoaded ? styles.loaded : styles.loadingImage}
          onLoad={handleMentorsImageLoad}
        />
      </div>
    </div>
  );
};
