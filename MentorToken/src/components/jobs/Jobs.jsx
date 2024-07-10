import React, { useState, useEffect, useRef } from "react";
import styles from "./Jobs.module.css";
import { JobsOverview } from "./jobsOverview/JobsOverview";

export const Jobs = () => {
  const [activeItem, setActiveItem] = useState(0);
  const indicatorRef = useRef(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const indicator = indicatorRef.current;
    const activeLink = document.querySelector(
      `.${styles.link}.${styles.active}`
    );
    if (indicator && activeLink) {
      indicator.style.left = `${activeLink.offsetLeft}px`;
      indicator.style.width = `${activeLink.offsetWidth}px`;
    }
  }, [activeItem]);

  return (
    <>
      <div className={styles.jobsContainer}>
        <h2 className={styles.title}>Assigned Jobs</h2>
        <div className={styles.LinksContainer}>
          <div
            className={`${styles.link} ${
              activeItem === 0 ? styles.active : ""
            }`}
            onClick={() => handleItemClick(0)}
          >
            <div className={styles.text}>
              <span>All</span>
            </div>
          </div>
          <div
            className={`${styles.link} ${
              activeItem === 1 ? styles.active : ""
            }`}
            onClick={() => handleItemClick(1)}
          >
            <div className={styles.text}>
              <span>Done</span>
            </div>
          </div>
          <div
            className={`${styles.link} ${
              activeItem === 2 ? styles.active : ""
            }`}
            onClick={() => handleItemClick(2)}
          >
            <div className={styles.text}>
              <span>Rejected</span>
            </div>
          </div>
          <div
            className={`${styles.link} ${
              activeItem === 3 ? styles.active : ""
            }`}
            onClick={() => handleItemClick(3)}
          >
            <div className={styles.text}>
              <span>In Progress</span>
            </div>
          </div>
          <div ref={indicatorRef} className={styles.activeIndicator}></div>
        </div>
      </div>
      <JobsOverview />
    </>
  );
};
