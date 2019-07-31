import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent' ;

function App() {
  return (
    <div className="App">
     <MyComponent name="selva">this is my children</MyComponent>
      <MyComponent name="selva">this is your children</MyComponent>
    </div>
  );
}

export default App;
