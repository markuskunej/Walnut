import React from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import "./SearchResultContainer.css";

export default function SearchResultContainer({
  course,
  searchTerm,
  numberResults,
}) {
  const manyResults = numberResults > 5;
  const descriptionLength = manyResults ? 90 : 250;
  const foundDescription = course["Course Description"].indexOf(searchTerm);
  let displayDescription = course["Course Description"];
  let showDescription = true;
  if (displayDescription === undefined || displayDescription === "") {
    showDescription = false;
  } else if (foundDescription === -1) {
    displayDescription = displayDescription.slice(0, descriptionLength) + "...";
  } else {
    displayDescription = (
      <p>
        {displayDescription.slice(
          foundDescription - 30 < 0 ? 0 : foundDescription - 30,
          foundDescription
        )}
        <b>{searchTerm}</b>
        {displayDescription.slice(
          foundDescription + searchTerm.length,
          foundDescription + descriptionLength
        )}
        ...
      </p>
    );
  }
  return (
    <div
      className={`search-result-container`}
      style={{
        width: manyResults ? "unset" : "100%",
        maxWidth: manyResults ? "800px" : "unset",
        minWidth: manyResults ? "400px" : "unset",
        flex: manyResults ? 1 : "unset",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2>{course["Code"]}</h2>
          <h3>{course["Name"]}</h3>
        </div>
        <div>
          <FavoriteButton courseCode={course["Code"]} />
        </div>
      </div>

      <h4>{course["Division"]}</h4>
      {showDescription ? <p>{displayDescription}</p> : <></>}
    </div>
  );
}