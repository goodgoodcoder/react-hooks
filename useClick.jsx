import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const useClick = (onClick) => {
  // if (typeof onClick !== "function") {
  //   return;
  // }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("hello");
  const clickTitle = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={clickTitle}>HI</h1>
    </div>
  );
};

export default App;
