import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stats from './Components/stats/Stats';
import SearchBar from './Components/stats/SearchBar';

function App() {
  return (
    <div className="App">
     <SearchBar/>
     <Stats/>
    </div>
  );
}
 
export default App;
