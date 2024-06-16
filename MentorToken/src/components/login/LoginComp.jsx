import React from "react";
import styles from "./LoginComp.module.css";

export const LoginComp = () => {
  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.left}>
          <h1>Grow your startup!</h1>
          <p></p>
          <img src="" alt="" />
          <div className={styles.logoContainer}>
            <div className={styles.logo}></div>
            <div className={styles.text}></div>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </>
  );
};
