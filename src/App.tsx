import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/title'
import SearchBar from './components/inputfield'



function App() {
  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <SearchBar></SearchBar>
     
    </div>
  );
}

export default App;
