import React from "react";

const Favorites = () => {
  const favorites = JSON.parse(window.localStorage.getItem("stories"));

  return favorites.map((story) => (
    <div>
      <p>{story}</p>
    </div>
  ));
};

export default Favorites;
