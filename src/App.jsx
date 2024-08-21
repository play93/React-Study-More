import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseContext from "./components/UseContext";

function App() {
  return (
    <>
      <UseState />
      <UseEffect />
      <UseRef />
      <UseContext />
    </>
  );
}

export default App;
