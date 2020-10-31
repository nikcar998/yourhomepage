import React from 'react';
import './App.css';
import {ResultProvider} from "../ResultContext";
import WeatherToggle from "../WeatherToggle/WeatherToggle"
import SearchSide from "../SearchSide/SearchSide"
function App() {
  return (
    <ResultProvider>
      <div className="App">
            <WeatherToggle />
            <ResultProvider>
            <SearchSide />
            </ResultProvider>
      </div>
    </ResultProvider>
  );
}

export default App;
