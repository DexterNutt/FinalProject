import React from "react";

export const Hero = () => {
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
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.625 9.5H15.2475"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <div className="hero">
      <div className="heroContainer">
        <div>
          <h1>Grow your StartUp! Monitoring and Evaluating now is easy!</h1>
          <p>
            Welcome to Mentor Token, where we redefine the dynamics of start-up
            success. Our innovative platform offers a transformative approach to
            mentorship, ensuring that mentors are not just engaged but motivated
            to drive the success of the ventures they support.
          </p>
        </div>
        <button>
          {arrowRight}
          Get Started
        </button>
        <span>Get in Touch</span>
      </div>
      <img src="/laptop.webp" alt="laptop" />
    </div>
  );
};
