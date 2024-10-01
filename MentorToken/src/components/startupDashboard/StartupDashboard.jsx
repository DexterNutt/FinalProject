import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "./sidebar/Sidebar";
import { Jobs } from "./jobs/Jobs";
import { Feed } from "./feed/Feed";
import { Mentors } from "./mentors/Mentors";
import styles from "./StartupDashboard.module.css";
import { SearchBar } from "../search/Search";
import { fetchStartupData } from "./startupDashboardSlice";
import { StartupProfile } from "../startupProfile/StartupProfile";
import { UserPage } from "../userPage/UserPage";

export const StartupDashboard = () => {
  const dispatch = useDispatch();
  const { startupData, loading, error } = useSelector(
    (state) => state.startupDashboard
  );
  const [activeItem, setActiveItem] = useState(0);
  const [visibility, setVisibility] = useState(true);
  const [selectedMentor, setSelectedMentor] = useState(null);

  useEffect(() => {
    dispatch(fetchStartupData());
  }, [dispatch]);

  const handleSelectMentor = (mentor) => {
    setSelectedMentor(mentor);
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        {/* ADD LOADING SPINNER <LoadingSpinner /> */}
        <h1>TBA</h1>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.body}>
      <div className={styles.sidebarContainer}>
        <Sidebar
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          visibility={visibility}
          setVisibility={setVisibility}
          className={styles.sidebar}
        />
      </div>
      <div
        className={`${styles.contentContainer} ${
          visibility ? styles.expanded : styles.collapsed
        }`}
      >
        <div className={styles.header}>
          <SearchBar onSelectMentor={handleSelectMentor} />
          <StartupProfile userData={startupData} />
        </div>

        <div className={styles.content}>
          {selectedMentor ? (
            <UserPage
              selectedMentor={selectedMentor}
              onBack={() => setSelectedMentor(null)}
            />
          ) : (
            <>
              {activeItem === 0 && <Jobs data={startupData} />}
              {activeItem === 1 && <Mentors data={startupData} />}
              {activeItem === 2 && <Feed data={startupData} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
