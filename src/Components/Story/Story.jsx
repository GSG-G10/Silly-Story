import React from "react";
import AnotherStoryButton from "./AnotherStoryButton";
import AddFavoriteButton from "./AddFavoriteButton";
import "../Form/Form.css";
import "./Story.css";

const Story = ({ title, userInputs, story, handleClick }) => {
  let sillyStory = story.map((element, index) => {
    return `${element} ${userInputs[index]}`;
  });

  return (
    <div className="story-body">
      <div className="story-container">
        <div className="story-header">
          <h1>{title}</h1>
          <AddFavoriteButton fullStory={sillyStory} />
        </div>
        <p>{sillyStory}</p>
        <AnotherStoryButton handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Story;
