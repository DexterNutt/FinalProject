import React, { useEffect } from "react";
import { RegisterStartup } from "../../components/auth/register/registerStartup/RegisterStartup";
import { RegisterMentor } from "../../components/auth/register/registerMentor/RegisterMentor";
import { RocketComp } from "../../components/rocket/RocketComp";
import styles from "./RegisterUser.module.css";

export const RegisterUser = () => {
  useEffect(() => {
    document.body.classList.add(styles.noOverflow);
    return () => {
      document.body.classList.remove(styles.noOverflow);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <RocketComp className={styles.rocket} />
      <RegisterStartup className={styles.right} />
      {/* <RegisterMentor className={styles.right} /> */}
    </div>
  );
};
