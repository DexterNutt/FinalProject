import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={formContainer}>
        <form action="submit">
          <input type="text" id="name" placeholder="Full Name" />
          <input type="email" id="email" placeholder="Email address " />
          <br />
          <textarea name="text" id="text" placeholder="Your message"></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};
