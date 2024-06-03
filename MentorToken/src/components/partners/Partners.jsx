import React from "react";
import styles from "./Partners.module.css";

export const Partners = () => {
  const logos = [
    "/partner_logos/adobe.png",
    "/partner_logos/braze.png",
    "/partner_logos/hellosign.png",
    "/partner_logos/maze.png",
    "/partner_logos/ghost.png",
    "/partner_logos/atlassian.png",
    "/partner_logos/treehouse.png",
    "/partner_logos/intercom.png",
    "/partner_logos/opendoor.png",
    "/partner_logos/hubspot.png",
  ];
  return (
    <div className={styles.partners}>
      <div className={styles.partnersContainer}>
        {logos.map((logo, i) => {
          return (
            <div key={i} className={styles.logoItem}>
              <img src={logo} alt={`logo-${i}`} className={styles.logo} />
            </div>
          );
        })}
      </div>
      <div className={styles.text}>
        <p>
          More than 25+ Startups around the
          <br /> world trusted Mentor Token.
        </p>
      </div>
    </div>
  );
};
