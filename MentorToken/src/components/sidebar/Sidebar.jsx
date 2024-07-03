import React, { useState } from "react";

export const Sidebar = () => {
  const [show, setShow] = useState("show");

  return (
    <div className={styles.Sidebar}>
      <div className={styles.logo}>
        <img src="/logo-white.svg" alt="logo" />
        <p>Mentor Token</p>
      </div>
      <div className="linksContainer">
        <ul>
          <li className="dashboard"></li>
          <li className="myStats"> </li>
          <li className="jobFeed"> </li>
        </ul>
      </div>
    </div>
  );
};
