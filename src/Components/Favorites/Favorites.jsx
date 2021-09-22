import React from "react";
import "../Story/Story.css";

const Favorites = () => {
  const favorites = JSON.parse(window.localStorage.getItem("stories"));

  return favorites.map((story) => (
    <div className="story-container">
      <p>{story}</p>
    </div>
  ));
};

export default Favorites;
