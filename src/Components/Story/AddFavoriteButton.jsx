import React from "react";

const AddFavoriteButton = ({ fullStory }) => {
  const JoinedFullStory = fullStory.join(" ");
  let stories = [];
  const oldData = JSON.parse(localStorage.getItem("stories"));
  console.log(oldData);
  const storeFavoriteStory = () => {
    if (oldData) {
      oldData.push(JoinedFullStory);
      window.localStorage.setItem("stories", JSON.stringify(oldData));
    } else {
      stories.push(JoinedFullStory);
      window.localStorage.setItem("stories", JSON.stringify(stories));
    }
  };

  return <button onClick={storeFavoriteStory}>Add to favorite</button>;
};

export default AddFavoriteButton;
