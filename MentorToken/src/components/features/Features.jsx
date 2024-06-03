import React from "react";

export const Features = () => {
  const features = [
    {
      id: 1,
      vector: "url(./public/vectors/radix-icons_rocket.png)",
      title: "Goal Setting",
      text: `Set clear and achievable goals for your startup's success.`,
    },
    {
      id: 2,
      vector: "url(./public/vectors/clarity_analytics-line.png)",
      title: "Performance Tracking",
      text: `Monitor mentor performance in real-time and track progress.`,
    },
    {
      id: 3,
      vector: "url(./public/vectors/fluent_reward-20-regular)",
      title: "Goal Setting",
      text: `Motivate mentors with a secure and rewarding token-based reward system.`,
    },
    {
      id: 4,
      vector: "url(./public/vectors/fluent_library-20-regular.png)",
      title: "Knowledge Library",
      text: `Access a comprehensive knowledge library to equip mentors with the skills, and motivation`,
    },
  ];
  return (
    <div className="features">
      <div className="featuresTop"></div>
      <div className="featuresBottom">{}</div>
    </div>
  );
};
