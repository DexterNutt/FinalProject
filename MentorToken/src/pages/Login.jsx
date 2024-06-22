import React from "react";
import { LoginComp } from "../components/login/LoginComp";
import { LoginForm } from "../components/auth/loginForm/LoginForm";
import styles from "./Login.module.css";

export const Login = () => {
  return (
    <div className={styles.wrapper}>
      <LoginComp className={styles.left} />
      <LoginForm className={styles.right} />
    </div>
  );
};
