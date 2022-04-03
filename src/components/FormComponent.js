import React, { useState } from "react";
import "./FormComponent.css";

import { addAllMovie } from "../index.js";

export const FormComponent = (props) => {
  const initState = {
    title: "",
    image: "",
    comment: "",
  };

  const [values, setValues] = useState(initState);

  const handleSubmit = (e) => {
    e.preventDefault();
    addAllMovie(values);
    setValues(initState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>TITLE:</label>
      <input
        type="text"
        name="title"
        required
        value={values.title}
        onChange={handleChange}
      />

      <label>IMAGE URL:</label>
      <input
        type={!values.image ? "text" : "url"}
        name="image"
        value={values.image}
        onChange={handleChange}
      />

      <label>COMMENT:</label>
      <input
        type="text"
        name="comment"
        value={values.comment}
        onChange={handleChange}
      />

      <input type="submit" value="ADD MOVIE" />
    </form>
  );
};
