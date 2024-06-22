import React from "react";
import { RocketComp } from "../components/login/RocketComp";
import { LoginForm } from "../components/auth/loginForm/LoginForm";
import styles from "./Login.module.css";

export const Login = () => {
  return (
    <div className={styles.wrapper}>
      <RocketComp className={styles.left} />
      <LoginForm className={styles.right} />
    </div>
  );
};
