import React from 'react';
import { Route } from 'react-router-dom';
import Food from './Food';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/food/:name' render={() => <Food />} />
    </div>
  );
}

export default App;
