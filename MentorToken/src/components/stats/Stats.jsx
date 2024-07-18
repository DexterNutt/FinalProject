import React, { useState, useRef } from "react";
import { SearchBar } from "../search/Search";
import { UserProfile } from "../userProfile/UserProfile";
import { Sidebar } from "../sidebar/Sidebar";
import { MentorStats } from "./mentorStats/MentorStats";
import styles from "./Stats.module.css";

export const Stats = () => {
  return (
    <div className={styles.container}>
      <Sidebar className={styles.sidebar} />
      <div className={styles.content}>
        <div className={styles.header}>
          <SearchBar />
          <UserProfile />
        </div>
        <div className={styles.body}>
          <MentorStats />
        </div>
      </div>
    </div>
  );
};
