import React from "react";

const Form = ({ data, handleClick, handleChange, inputs }) => {
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
      <button onClick={handleClick}>Submit</button>
    </form>
  );
};

export default Form;
