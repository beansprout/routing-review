 What parts created where Imported Where]
============================================

react bits
----------

# src/index.js
##imports
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
  import { Provider } from 'react-redux';
  import { createStore } from 'redux';
  import reducers from './reducers';
  import App from './App';
  import Movies from './Movies';
  import './index.css';

## ReactDOM.render(component(s), \`middleware/ other pkgs\` )
- put between reducers
- runs middlewares

#Reducers
# reducers/index.js
## imports
- import { combineReducers } from 'redux';
- import MoviesReducer from './Movies';
- import SelectedMoviesReducer from './SelectedMovies';
## variables
- rootReducer
- const rootReducer = combineReducers({ movies: MoviesReducer, selectedMovies: SelectedMovieReducer, }); export default rootReducer;

# MovieReducer.js
 export default
  returns array of objects
  - keys
    - title
    - year
    - minRecommendedAge
    - genre

 ##SelectedMovieReducer.js
- export default (state = \[\], action) =&gt;

# switch (action.type) {
- case ('SELECT\_MOVIE'):
 return action.payload;
 default: return state;
 }

## template list type reducer.js
 export default
 returns array of objects
 keys
