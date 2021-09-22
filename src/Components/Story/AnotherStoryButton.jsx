import React from "react";
import { withRouter } from "react-router";

const AnotherStoryButton = ({ history, handleClick }) => {

  return (
    <button
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
