import React from "react";
import styles from "./Features.module.css";

export const Features = () => {
  const features = [
    {
      id: 1,
      vector: "/vectors/radix-icons_rocket.png",
      alt: "icon_rocket",
      title: "Goal Setting",
      text: `Set clear and achievable goals for your startup's success.`,
    },
    {
      id: 2,
      vector: "/vectors/clarity_analytics-line.png",
      alt: "icon-line",
      title: "Performance Tracking",
      text: `Monitor mentor performance in real-time and track progress.`,
    },
    {
      id: 3,
      vector: "/vectors/fluent_reward-20-regular.png",
      alt: "icon-reward",
      title: "Goal Setting",
      text: `Motivate mentors with a secure and rewarding token-based reward system.`,
    },
    {
      id: 4,
      vector: "/vectors/fluent_library-20-regular.png",
      alt: "icon-library",
      title: "Knowledge Library",
      text: `Access a comprehensive knowledge library to equip mentors with the skills, and motivation`,
    },
  ];

  return (
    <div className={styles.features}>
      <img src="/rocket.webp" alt="rocketship" id={styles.rocketShip} />
      <div className={styles.featuresContainer}>
        <div className={styles.featuresTop}>
          <h2>FEATURES</h2>
          <p>
            Boost Your Startup's Journey: <br />
            Discover Mentor Token's Robust <br />
            Features
          </p>
        </div>
        <div className={styles.cardsContainer}>
          {features.map((feature, i) => {
            return (
              <div key={i} className={styles.featureCard}>
                <img src={feature.vector} alt={feature.alt} />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
