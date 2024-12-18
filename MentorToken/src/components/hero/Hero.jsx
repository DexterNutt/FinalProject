import React, { useState } from "react";
import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  const arrowRight = (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8223 4.94727L15.3748 9.49977L10.8223 14.0523"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.625 9.5H15.2475"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroItems}>
          <h1>Grow your StartUp! Monitoring and Evaluating now is easy!</h1>
          <p>
            Welcome to Mentor Token, where we redefine the dynamics of start-up
            success. Our innovative platform offers a transformative approach to
            mentorship, ensuring that mentors are not just engaged but motivated
            to drive the success of the ventures they support.
          </p>
          <div className={styles.buttonContainer}>
            <button onClick={goToRegister}>
              {arrowRight}
              Get Started
            </button>
            <span onClick={goToContact}>Get in Touch</span>
          </div>
        </div>
        <img
          src="/laptop.webp"
          alt="laptop"
          className={isLoaded ? styles.loaded : styles.loadingImage}
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
};
