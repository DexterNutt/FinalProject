import React, { useState, useEffect } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { Jobs } from "./jobs/Jobs";
import { Stats } from "./stats/Stats";
import { Feed } from "./feed/Feed";
import styles from "./MentorDashboard.module.css";
import { fetchUser } from "../../api/usersApi";

export const MentorDashboard = ({ userId }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const currentUser = await fetchUser(userId);
        console.log(currentUser);
        // SET THE STATE FOR THE COMPONENTS HERE?
      } catch (error) {
        console.error("Error fetching user data:", err);
      }
    };

    getUserData();
  }, [userId]);

  return (
    <div className={styles.body}>
      <Sidebar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        visibility={visibility}
        setVisibility={setVisibility}
      />
      <div
        className={`${styles.content} ${!visibility ? styles.expanded : ""}`}
      >
        {activeItem === 0 && <Jobs />}
        {activeItem === 1 && <Stats />}
        {activeItem === 2 && <Feed />}
      </div>
    </div>
  );
};
