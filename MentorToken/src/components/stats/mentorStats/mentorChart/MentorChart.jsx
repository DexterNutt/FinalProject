import React from "react";
import styles from "./MentorChart.module.css";
import { Chart } from "../../../chart/Chart";

export const MentorChart = () => {
  return (
    <div className={styles.compContainer}>
      <h1 className={styles.title}>Performance Over Time</h1>
      <div className={styles.chartContainer}>
        <h4 className={styles.chartTitle}>Statistics</h4>
        <span>Overall target accomplishment over the year</span>
        <Chart />
      </div>
    </div>
  );
};
