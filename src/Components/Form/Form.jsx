import React from "react";

const Form = ({ data, handleChange }) => {
  const handleSubmit = (e) => {
    return e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {data !== undefined ? (
        data.map((ele, index) => (
          <div>
            <label>{ele}</label>
            <input key={index} input="text" />
          </div>
        ))
      ) : (
        <p>wait</p>
      )}
      <button onClick={handleChange}>Submit</button>
    </form>
  );
};

export default Form;
