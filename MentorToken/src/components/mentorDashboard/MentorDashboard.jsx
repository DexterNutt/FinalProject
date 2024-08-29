import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Sidebar } from "./sidebar/Sidebar";
import { Jobs } from "./jobs/Jobs";
import { Stats } from "./stats/Stats";
import { Feed } from "./feed/Feed";
import styles from "./MentorDashboard.module.css";
import { fetchUser } from "../../api/usersApi";

export const MentorDashboard = () => {
  const { userId } = useParams();
  const [activeItem, setActiveItem] = useState(0);
  const [visibility, setVisibility] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const currentUser = await fetchUser(userId);
        console.log(currentUser);
        setUserData(currentUser);
      } catch (error) {
        console.error("Error fetching user data:", error);
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
        {activeItem === 0 && <Jobs userData={userData} />}
        {activeItem === 1 && <Stats userData={userData} />}
        {activeItem === 2 && <Feed userData={userData} />}
      </div>
    </div>
  );
};
