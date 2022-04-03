import React from "react";
import "./App.css";

import { CategoryComponent } from "./components/CategoryComponent";
import { FormComponent } from "./components/FormComponent";

const App = (props) => {
  const getCategoryTitle = (key) => {
    switch (key) {
      case "movies":
        return "Watchlist";
      case "watched":
        return "Already watched";
      default:
        return "";
    }
  };

  const Categories = Object.keys(props).map((key) => {
    return (
      <CategoryComponent
        title={getCategoryTitle(key)}
        items={props[key]}
        type={key}
        key={key}
      />
    );
  });

  return (
    <div className="App">
      <h1>Codest Movies!</h1>

      <h2>Add movie!</h2>
      <FormComponent />

      <div className="categories-list">{Categories}</div>
    </div>
  );
};

export default App;
