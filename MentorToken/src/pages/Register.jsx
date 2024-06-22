import React, { useEffect } from "react";
import { RocketComp } from "../components/rocket/RocketComp";
import { RegisterForm } from "../components/auth/registerForm/RegisterForm";
import styles from "./Register.module.css";

export const Register = () => {
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
      <RegisterForm className={styles.right} />
    </div>
  );
};
