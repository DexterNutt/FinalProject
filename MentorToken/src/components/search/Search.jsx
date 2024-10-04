import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Search.module.css";
import { setQuery, fetchMentors, resetSearch } from "./searchSlice";

export const SearchBar = ({ onSelectMentor }) => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const searchStatus = useSelector((state) => state.search.status);
  const mentors = useSelector((state) => state.search.results);

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

  const handleSelectMentor = (mentor) => {
    onSelectMentor(mentor);
    dispatch(resetSearch());
  };

  const topSearchHits = mentors.slice(0, 3);

  return (
    <div className={styles.searchBar}>
      <img src="/vectors/magn-glass.svg" alt="Search Icon" />
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={searchMentor()}
      />
      {searchStatus === "loading" && (
        <div className={styles.loading}>Loading...</div>
      )}

      {searchStatus === "succeeded" && topSearchHits.length > 0 && (
        <div className={styles.resultsList}>
          {topSearchHits.map((mentor) => (
            <div
              key={mentor._id}
              className={styles.resultItem}
              onClick={() => handleSelectMentor(mentor)}
            >
              {mentor.mentorName}
            </div>
          ))}
        </div>
      )}

      {searchStatus === "succeeded" && topSearchHits.length === 0 && (
        <p>No matches found</p>
      )}
    </div>
  );
};
