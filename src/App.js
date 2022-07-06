import Hooks from './Hooks';
import React, { useState } from "react"
import './App.css';

function App() {
  const [heading, setHeading] = useState("Default Heading");

  const clickHandler = () => {
    setHeading("New Heading");
  }

  return (
    <div>
      <h1>{heading}</h1>
      <button type="button" onClick={clickHandler}>Click</button>
      <Hooks />
      {/* <h1>Our First Test</h1> */}
    </div>
  );
}

export default App;
