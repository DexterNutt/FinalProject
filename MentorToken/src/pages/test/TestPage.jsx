import React from "react";
import styles from "./TestPage.module.css";
import { Jobs } from "../../components/jobs/Jobs";

export const TestPage = () => {
  return (
    <div className={styles.wrapper}>
      <Jobs />
    </div>
  );
};
