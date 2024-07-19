import React, { useState } from "react";
import { Sidebar } from "./sidebar/Sidebar"; // Adjust the import path as needed
import { Jobs } from "./jobs/Jobs"; // Adjust the import path as needed
import { Stats } from "./stats/Stats"; // Adjust the import path as needed
import styles from "./MentorDashboard.module.css";
export const MentorDashboard = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [visibility, setVisibility] = useState(true);

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
      </div>
    </div>
  );
};
