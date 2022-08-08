import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/title'
import SearchBar from './components/inputfield'
import OutlinedButtons from './components/button'
function App() {
  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
     <SearchBar></SearchBar>
     <OutlinedButtons></OutlinedButtons>
    </div>
  );
}

export default App;
