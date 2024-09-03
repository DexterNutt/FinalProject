import React from "react";

import { MentorStats } from "./mentorStats/MentorStats";
import styles from "./Stats.module.css";
import { MentorChart } from "./mentorStats/mentorChart/MentorChart";
import { QuickOverview } from "./mentorStats/quickOverview/QuickOverview";

export const Stats = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.body}>
          <MentorStats />
        </div>
        <div className={styles.stats}>
          <MentorChart />
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
