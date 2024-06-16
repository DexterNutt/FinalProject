import React from "react";
import styles from "./LoginForm.module.css"; // Import CSS module

export const LoginForm = () => {
  return (
    <>
      <div className={styles.LoginFormContainer}>
        <img src="/logo.svg" alt="logo" />

        <div className={styles.text}>
          <h3>Log in to Mentor Token</h3>
          <span>Enter your email and password to login</span>
        </div>

        <div className={styles.form}>
          <form action="submit">
            <input
              className={styles.input}
              type="email"
              name="email"
              id=""
              placeholder="mentortoken@mail.com"
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
            <button
              className={styles.button}
              onClick={(e) => e.preventDefault()}
            >
              Login
            </button>
          </form>
        </div>

        <div className={styles.registerLink}>
          <span>Don't have an account?</span>
          <a className={styles.registerLinkText} href="/#">
            Register
          </a>
        </div>
      </div>
    </>
  );
};
