import React, { useEffect } from "react";
import { RocketComp } from "../components/rocket/RocketComp";
import { LoginForm } from "../components/auth/loginForm/LoginForm";
import styles from "./Login.module.css";

export const Login = () => {
  useEffect(() => {
    // Add the overflow hidden class to the body
    document.body.classList.add(styles.noOverflow);

    // Clean up the effect by removing the class when the component unmounts
    return () => {
      document.body.classList.remove(styles.noOverflow);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <RocketComp className={styles.left} />
      <LoginForm className={styles.right} />
    </div>
  );
};
