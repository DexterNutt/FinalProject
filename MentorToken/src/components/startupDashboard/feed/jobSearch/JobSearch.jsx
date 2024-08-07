import React from "react";
import styles from "./JobSearch.module.css";

export const JobSearch = () => {
  return (
    <div className={styles.jobsSearchContainer}>
      <div className={styles.title}>
        <h1>Your Startup Jobs</h1>
      </div>
      <div className={styles.searchTabs}>
        <div className={styles.left}>
          <div className={styles.sortBy}>
            <label>Sort by:</label>
            <select>
              <option>Popular</option>
              <option>Recent</option>
              <option>Most Viewed</option>
            </select>
          </div>
          <div className={styles.category}>
            <label>Category:</label>
            <select>
              <option>All Category</option>
              <option>Technology</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.filters}>
            <img
              src="/vectors/dashboard/sort-az.svg"
              alt="sort AZ"
              className={styles.icon}
            />
            <span>Filters</span>
          </div>
          <div className={styles.renderList}>
            <img
              src={`/vectors/dashboard/layout-grid.svg`}
              alt="Menu Squares"
              className={styles.icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
