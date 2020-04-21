import React, { useState } from 'react';

import { Route, Switch, Link } from 'react-router-dom';

import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
    console.log(savedList)
  };

  return (
    <div>
   
      <SavedList list={savedList} />

      <Switch>
        
        <Route path='/movies/:id'>
          <Movie addToSavedList={addToSavedList} />
        </Route>
        
        <Route path='/'>
          <MovieList />
        </Route>
        
      </Switch>
      
    </div>
  );
};

export default App;
