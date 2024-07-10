import React from "react";
import styles from "./TestPage.module.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Jobs } from "../../components/jobs/Jobs";

export const TestPage = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <Jobs />
    </div>
  );
};
