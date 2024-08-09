import React from "react";
import { SearchBar } from "../../search/Search";
import { StartupProfile } from "../../startupProfile/StartupProfile";
import { MentorList } from "./MentorList/MentorList";
import { QuickOverview } from "../../mentorDashboard/stats/mentorStats/quickOverview/QuickOverview";

import styles from "./Mentors.module.css";

export const Mentors = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <SearchBar />
          <StartupProfile />
        </div>
        <div className={styles.body}>
          <MentorList />
          <QuickOverview
            totalJobs={132}
            assignedJobs={43}
            appliedJobs={21}
            finishedJobs={63}
          />
        </div>
      </div>
    </div>
  );
};
