import React from "react";
import styles from "./LoginComp.module.css";

export const LoginComp = () => {
  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.left}>
          <h1>
            Grow <br /> your <br /> startup!
          </h1>
          <span>Monitoring and evaluating now is easy!</span>
          <img src="" alt="" />
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <img src="/logo-white.svg" alt="logo" />
              <p>Mentor Token</p>
            </div>
            <div className={styles.link}>mentortoken.com</div>
          </div>
        </div>

        <div className={styles.right}>
          <img src="/logo.svg" alt="logo" />

          <div className={styles.text}>
            <h3>Log in to Mentor Token</h3>
            <span>Enter your email and password to login</span>
          </div>

          <div className={styles.form}>
            <form action="submit">
              <input type="email" name="email" id="" />
              <input type="password" name="password" id="" />
              <button onClick={(e) => e.preventDefault}>Login</button>
            </form>
          </div>

          <div className={styles.registerLink}>
            <span>Don't have an account?</span>
            <a href="/#">Register</a>
          </div>
        </div>
      </div>
    </>
  );
};
