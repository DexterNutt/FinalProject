import React from "react";
import styles from "./RocketComp.module.css";

export const RocketComp = () => {
  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.left}>
          <h1>
            Grow <br />
            your
            <br />
            <span> startup!</span>
          </h1>

          <p id={styles.highlightText}>
            Monitoring and evaluating now is easy!
          </p>

          <img id={styles.rocket} src="/rocket.webp" alt="rocket" />

          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <img src="/logo-white.svg" alt="logo" />
              <p>Mentor Token</p>
            </div>
            <div className={styles.link}>mentortoken.com</div>
          </div>
        </div>
      </div>
    </>
  );
};
