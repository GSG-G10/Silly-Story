import React from "react";
import AnotherStoryButton from "./AnotherStoryButton";

const Story = ({ title, userInputs, story,handleClick }) => {
  let sillyStory = story.map((element, index) => {
    return `${element} ${userInputs[index]}`;
  });

  return (
    <>
      <h1>{title}</h1>
      <p>{sillyStory}</p>
      <AnotherStoryButton handleClick={handleClick}/>
    </>
  );
};

export default Story;
