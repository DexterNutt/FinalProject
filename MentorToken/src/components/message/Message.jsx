import React from "react";
import styles from "./Message.module.css";

export const Message = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.message}>
      <div className={styles.formContainer}>
        <div className={styles.text}>
          <h1>Let's Talk!</h1>
          <p>
            We’re thrilled to connect with you! Whether you have a question,
            need assistance, or want to discuss a potential project, we’re here
            to listen and help. At Mentor Token, we believe in the power of
            collaboration and are committed to providing you with the best
            support and solutions. Fill out the form below, and one of our team
            members will get back to you as soon as possible.
          </p>
          <span>Let’s create something amazing together!</span>
        </div>
        <form class={styles.contactUsForm} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <input type="text" id="name" placeholder="Full Name" />
            <input type="email" id="email" placeholder="Email address " />
          </div>

          <textarea name="text" id="text" placeholder="Your message"></textarea>

          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};
