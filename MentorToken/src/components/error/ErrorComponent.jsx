import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ErrorComponent.module.css";

export const ErrorComponent = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.ErrorComponent}>
        <img src="/ErrorRocket.svg" alt="Error Component" />

        <button className={styles.homeButton} onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    </div>
  );
};
