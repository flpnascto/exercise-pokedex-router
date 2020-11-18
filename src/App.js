import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <Route exact path="/">
          <Pokedex pokemons={pokemons} />
        </Route>
        <Route path="/pokemon:id" />
      </BrowserRouter>
    </div>
  );
}

export default App;