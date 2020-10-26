import React from 'react';
import './App.css';
import Header from "../Header/Header"
import News from "../News/News"
import SearchSide from "../SearchSide/SearchSide"
function App() {
  return (
    <div className="App">
      <Header />
      <div className="contentContainer">
          <SearchSide />
          <News />
      </div>
    </div>
  );
}

export default App;
