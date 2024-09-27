import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Search.module.css";
import { setQuery, fetchMentors } from "./searchSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const searchStatus = useSelector((state) => state.search.status);
  const mentors = useSelector((state) => state.search.results);

  // Debounced search function
  const searchMentor = useCallback(() => {
    let timeoutId;
    return (e) => {
      const searchedTerm = e.target.value;
      dispatch(setQuery(searchedTerm));

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (searchedTerm.trim() === "") {
        return;
      }

      timeoutId = setTimeout(() => {
        dispatch(fetchMentors(searchedTerm));
      }, 500);
    };
  }, [dispatch]);

  const topMentors = mentors.slice(0, 3);

  return (
    <div className={styles.searchBar}>
      <img src="/vectors/magn-glass.svg" alt="Search Icon" />
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={searchMentor()}
      />
      {searchStatus === "loading" && <p>Loading...</p>}

      {searchStatus === "succeeded" && topMentors.length > 0 && (
        <ul className={styles.resultsList}>
          {topMentors.map((mentor) => (
            <li key={mentor._id} className={styles.resultItem}>
              {mentor.mentorName}
            </li>
          ))}
        </ul>
      )}

      {searchStatus === "succeeded" && topMentors.length === 0 && (
        <p>No matches found</p>
      )}
    </div>
  );
};
