import React from "react";
import "./Form.scss";

const Form = (props) => {
  const { handleInput, handleSubmit } = props;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="form__search" type="text" placeholder="enter city..." onInput={handleInput} />
      <input className="form__btn" type="submit" value="Search" />
    </form>
  );
};

export default Form;
