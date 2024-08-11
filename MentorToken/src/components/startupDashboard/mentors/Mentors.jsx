import React, { useState, useRef } from "react";
import { SearchBar } from "../../search/Search";
import { StartupProfile } from "../../startupProfile/StartupProfile";
import { MentorList } from "./MentorList/MentorList";
import { QuickOverview } from "../../mentorDashboard/stats/mentorStats/quickOverview/QuickOverview";
import { MentorProfile } from "../../mentorDashboard/stats/mentorStats/mentorProfile/MentorProfile";
import { MentorDetails } from "../../mentorDashboard/stats/mentorStats/mentorDetails/MentorDetails";
import { JobsIndicator } from "../../mentorDashboard/jobs/jobsIndicator/JobsIndicator";
import { JobList } from "../../mentorDashboard/jobs/jobList/JobList";
import { PendingJobs } from "../../mentorDashboard/jobs/pendingJobs/PendingJobs";

import styles from "./Mentors.module.css";

export const Mentors = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [activeItem, setActiveItem] = useState(0);
  const indicatorRef = useRef(null);

  const handleMentorClick = (mentor) => {
    setSelectedMentor(mentor);
  };

  const getActiveTab = () => {
    switch (activeItem) {
      case 1:
        return "Done";
      case 2:
        return "Rejected";
      case 3:
        return "In Progress";
      default:
        return "All";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <SearchBar />
          <StartupProfile />
        </div>
        <div className={styles.body}>
          {selectedMentor ? (
            <div className={styles.openMentor}>
              <div className={styles.mentorData}>
                <MentorProfile mentorData={selectedMentor} />
                <MentorDetails mentorData={selectedMentor} />
              </div>
              <div className={styles.jobsContainer}>
                <div className={styles.assignedJobs}>
                  <JobsIndicator
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    indicatorRef={indicatorRef}
                  />
                  <JobList activeTab={getActiveTab()} />
                </div>
                <div className={styles.pendingJobs}>
                  <PendingJobs />
                </div>
              </div>
            </div>
          ) : (
            <>
              <MentorList onMentorClick={handleMentorClick} />
              <QuickOverview
                totalJobs={132}
                assignedJobs={43}
                appliedJobs={21}
                finishedJobs={63}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
