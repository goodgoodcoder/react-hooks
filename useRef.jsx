import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const inputRef = useRef();
  setTimeout(() => inputRef.current.focus(), 5000);
  return (
    <div className="App">
      <input ref={inputRef} placeholder="la" />
    </div>
  );
};

export default App;
