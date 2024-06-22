import React from "react";
import { RocketComp } from "../components/rocket/RocketComp";
import { RegisterForm } from "../components/auth/registerForm/RegisterForm";
import styles from "./Register.module.css";

export const Register = () => {
  return (
    <div className={styles.wrapper}>
      <RocketComp className={styles.left} />
      <RegisterForm className={styles.right} />
    </div>
  );
};
