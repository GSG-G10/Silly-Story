import React from "react";

const Story = ({ title, userInputs, story }) => {
    
  let sillyStory = story.map((element, index) => {
    return `${element} ${userInputs[index]}`;
  });

  return (
    <>
      <h1>{title}</h1>
      <p>{sillyStory}</p>
    </>
  );
};

export default Story;
