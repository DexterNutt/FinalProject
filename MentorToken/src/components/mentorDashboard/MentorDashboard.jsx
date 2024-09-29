import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "./sidebar/Sidebar";
import { SearchBar } from "../search/Search";
import { UserProfile } from "../userProfile/UserProfile";
import { Jobs } from "./jobs/Jobs";
import { Stats } from "./stats/Stats";
import { Feed } from "./feed/Feed";
import styles from "./MentorDashboard.module.css";
import { fetchUserData } from "./mentorDashboardSlice";
import { UserPage } from "../userPage/UserPage";

export const MentorDashboard = () => {
  const dispatch = useDispatch();
  const { userData, loading, error } = useSelector(
    (state) => state.mentorDashboard
  );
  const [activeItem, setActiveItem] = useState(0);
  const [visibility, setVisibility] = useState(true);
  const [selectedMentor, setSelectedMentor] = useState(null);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const handleSelectMentor = (mentor) => {
    setSelectedMentor(mentor);
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
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
          <UserProfile userData={userData} />
        </div>
        <div className={styles.content}>
          {selectedMentor ? (
            <UserPage
              selectedMentor={selectedMentor}
              onBack={() => setSelectedMentor(null)}
            />
          ) : (
            <>
              {activeItem === 0 && <Jobs userData={userData} />}
              {activeItem === 1 && <Stats userData={userData} />}
              {activeItem === 2 && <Feed userData={userData} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
