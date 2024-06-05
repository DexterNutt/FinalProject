import React from "react";
import styles from "./Team.module.css";

export const Team = () => {
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

  const teamMembers = [
    {
      id: 1,
      img: "/avatars/1.webp",
      alt: "smiling young man",
      name: "Ian Sorell",
      position: "CEO",
      text: `Enjoys adventurous travel, seeks new cultures and offbeat destinations`,
    },
    {
      id: 2,
      img: "/avatars/2.webp",
      alt: "smiling freckled woman",
      name: "Maya Matt",
      position: "Founder",
      text: `Pop music lover, seeks joy and exciting pop concerts`,
    },
    {
      id: 3,
      img: "/avatars/3.webp",
      alt: "young smiling woman in pink sweater",
      name: "Alex Jensen",
      position: "CTO",
      text: `Bookworm, creative software developer with precision`,
    },

    {
      id: 4,
      img: "/avatars/4.webp",
      alt: "woman in striped black and white shirt",
      name: "Keira Battye",
      position: "Product Designer",
      text: `Creative painter capturing beauty with imaginative artwork`,
    },
    {
      id: 5,
      img: "/avatars/5.webp",
      alt: "man with stylish haricut",
      name: "Dominic Game",
      position: "3D Artist",
      text: `Football enthusiast, enjoys movie nights with friends`,
    },
    {
      id: 6,
      img: "/avatars/6.webp",
      alt: "man with beard",
      name: "James Vial",
      position: "Head of Front-End",
      text: `Culinary artist, explores diverse flavors, skilled in cooking`,
    },
  ];
  return (
    <div className="team">
      <div className="teamIntro">
        <div className="introContainer">
          <h1 id="title">Meet our team members</h1>
          <p>
            We Focus on the details of everything we do. All to help businesses
            around the world Focus on what's most important to them.
          </p>
          <button>
            {arrowRight}
            Get Started
          </button>
        </div>
      </div>
      <div className="teamCards">
        {teamMembers.map((member, i) => {
          return (
            <div key={i} className={styles.memberCard}>
              <img src={member.img} alt={member.alt} />
              <h3>{member.name}</h3>
              <h2>{member.position}</h2>
              <p>{member.text}</p>
              <div id={styles.socials}>
                <img
                  src="/vectors/socials/facebook.svg"
                  alt="logo facebook"
                  className={styles.logo}
                />
                <img
                  src="/vectors/socials/github.svg"
                  alt="logo github"
                  className={styles.logo}
                />
                <img
                  src="/vectors/socials/linkedin.svg"
                  alt="logo linkedin"
                  className={styles.logo}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
