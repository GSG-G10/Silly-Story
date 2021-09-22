import React from "react";
import { withRouter } from "react-router";

const Form = ({ data, handleChange, inputs, history }) => {
  const handleSubmit = (e) => {
    return e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {data.map((ele, index) => (
        <div key={index}>
          <label>{ele}</label>
          <input
            type="search"
            value={inputs[ele]}
            id={`${index}`}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button onClick={() => history.push("/story")}>Submit</button>
    </form>
  );
};

export default withRouter(Form);
