import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import MyOtherComponent from './components/MyOtherComponent';
import BeerList from './components/Beer/BeerList'


function App() {
  return (
    <div className="App">
      <BeerList />
      {/* <MyComponent />
      <MyOtherComponent /> */}

    </div>
  );
}

export default App;
