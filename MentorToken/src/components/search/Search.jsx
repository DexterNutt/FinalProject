import React from "react";
import styles from "./SearchBar.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <i className="fas fa-search"></i>
      <input type="text" placeholder="Search" />
    </div>
  );
};
