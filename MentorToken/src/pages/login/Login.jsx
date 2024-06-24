import React, { useEffect } from "react";
import { RocketComp } from "../../components/rocket/RocketComp";
import { LoginForm } from "../../components/auth/loginForm/LoginForm";
import styles from "./Login.module.css";

export const Login = () => {
  useEffect(() => {
    document.body.classList.add(styles.noOverflow);
    return () => {
      document.body.classList.remove(styles.noOverflow);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <RocketComp className={styles.rocket} />
      <LoginForm className={styles.right} />
    </div>
  );
};
