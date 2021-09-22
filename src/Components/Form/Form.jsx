import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./Form.css";

const Form = ({
  data,
  handleChange,
  inputs,
  history,
  isFormValid,
  validateForm,
}) => {
  const handleSubmit = (e) => {
    return e.preventDefault();
  };

  const handleClick = () => {
    validateForm();
    if (isFormValid) {
      history.push("/story");
    }
    return <h3>Fill inputs!</h3>;
  };

  return (
    <div>
      <Link to="/favorites">Favorites</Link>
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Silly Stories</h1>
        <p>Fill the spaces with your creativity!</p>
        {data.map((ele, index) => (
          <div key={index}>
            <input
              placeholder={ele}
              className="form-control"
              type="search"
              value={inputs[ele]}
              id={`${index}`}
              onChange={handleChange}
            />
          </div>
        ))}
        <button className="Submit-button" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default withRouter(Form);
