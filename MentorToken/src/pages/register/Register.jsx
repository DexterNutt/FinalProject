import React, { useEffect } from "react";
import { RocketComp } from "../../components/rocket/RocketComp";
import { RegisterForm } from "../../components/auth/register/registerForm/RegisterForm";
import styles from "./Register.module.css";

export const Register = () => {
  useEffect(() => {
    document.body.classList.add(styles.noOverflow);
    return () => {
      document.body.classList.remove(styles.noOverflow);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <RocketComp className={styles.rocket} />
      <RegisterForm className={styles.right} />
    </div>
  );
};
