import React from "react";
import { withRouter } from "react-router";
import './Story.css'

const AnotherStoryButton = ({ history, handleClick }) => {

  return (
    <button
      className='Submit-button'
      onClick={() => {
        handleClick();
        history.push("/");
      }}
    >
      Create another story
    </button>
  );
};

export default withRouter(AnotherStoryButton);
