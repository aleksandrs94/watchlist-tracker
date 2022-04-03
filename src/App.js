import React from 'react';
import './App.css';

import { addWatchedMovie, add, removeWatchedMovie, getWatchedMovies, getAllMovies } from './index.js';

// Form maintainability I would suggest to split this file into multiple reusable components, like - formComponent, categoryComponent, posterComponent, etc.

const getMoviesComponents = (movies) => {
  var components = [];

  movies.forEach(function(movie) {
    components.push(
      // Runtime error - Each child in a list should have a unique "key" prop, since we dont have unique id, I believe we can provide at least an index.
      <div className="all">
        <div>
          {/* 
            ESLint runtime warning - img elements must have an alt prop, either with meaningful text, or an empty string for decorative images
            I think we can add movie.title as an alt text
          */}
          <img src={movie.image} height="100px" />
        </div>
        <span>
          {/* 
            ESLint runtime warning - The href attribute requires a valid value to be accessible
            I would refactor this as button and add necessary styling
          */}
          <a className="movie-watched" href="#" onClick={function() { addWatchedMovie(movie.title, movie.comment, movie.image) }}>
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    )
  })

  return components;
}

function getWatchedMoviesComponents(movies) {
  var components = [];

  movies.forEach(function(movie) {
    // Same as line 13
    components.push(movie && (
      <div className="watched">
        <div>
          {/* 
            Same as line 14
          */}
          <img src={movie.image} height="100px" />
        </div>
        <span>
          {/* 
            Same as line 19
          */}
          <a className="movie-watched" href="#" onClick={function() { removeWatchedMovie(movie.title) }}>
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    ))
  })

  return components;
}

function App(props) {
  return (
    <div className="App">
      {/* 
        I see some misuse of html semantics, it is recommend to use css for formatting text and adding spaces between elements
        It is not recommended to have more then one h1 tag per page, can negatively impact SEO
        Also would recommend to use useState react hook to control values of the form - https://reactjs.org/docs/hooks-state.html
      */}
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>
      <b>TITLE:<br /><input type="text" onChange={function(e) { title = e.target.value; }} /></b><br />
      <b>IMAGE URL:<br /><input type="text" onChange={function(e) { image = e.target.value; }} /></b><br />
      <b>COMMENT:<br /><input type="text" onChange={function(e) { comment = e.target.value; }} /></b><br />
      <input type="button" onClick={function(e) { add(title, image, comment); }} value="ADD MOVIE" />

      {/* 
        "Watchlist" and "Already watched" lists I would split into separate component (ex. categoryComponent) to avoid code duplication and make it more maintainable 
      */}
      <h1>Watchlist:</h1>
      {getMoviesComponents(getAllMovies())}

      <h1>Already watched:</h1>
      {getWatchedMoviesComponents(getWatchedMovies())}
    </div>
  );
}

// Try to avoid creating variables with global scope
var title = '';
var image = '';
var comment = '';

export default App;
