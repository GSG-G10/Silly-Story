import React from "react";
import { withRouter } from "react-router";
import './Form.css'

const Form = ({ data, handleChange, inputs, history }) => {
  const handleSubmit = (e) => {
    return e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <h1>Silly Stories</h1>
      <p>Fill the spaces with your creativity!</p>
      {data.map((ele, index) => (
        <div key={index}>
          {/* <label className='form-group'>{ele}</label> */}
          <input
            placeholder={ele}
            className='form-control'
            type="search"
            value={inputs[ele]}
            id={`${index}`}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button className='Submit-button' onClick={() => history.push("/story")}>Submit</button>
    </form>
  );
};

export default withRouter(Form);
