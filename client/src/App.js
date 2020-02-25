import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import {Route, Link} from 'react-router-dom';
import MovieLists from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Link to='/'>Home</Link>
      <Route exact path='/'>
        <MovieLists />
      </Route>
      <Route path='/movies/:id'>
        <Movie />
      </Route>
    </div>
  );
};

export default App;
