import React from "react";
import styles from "./Search.module.css";

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <img src="./vectors/magn-glass.svg" />
      <input type="text" placeholder="Search" />
    </div>
  );
};
