import React from 'react';
import './App.css';
import WeatherToggle from "../WeatherToggle/WeatherToggle"
import SearchSide from "../SearchSide/SearchSide"
function App() {
  return (
      <div className="App">
            <WeatherToggle />
            <SearchSide />
      </div>
  );
}

export default App;
