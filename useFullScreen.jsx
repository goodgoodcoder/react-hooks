import React, { useRef } from "react";
import ReactDOM from "react-dom";

const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    } else if (element.current.mozRequestFullScreen) {
      element.current.mozRequestFullScreen();
    } else if (element.current.webkitRequestFullscreen) {
      element.current.webkitRequestFullscreen();
    } else if (element.current.msRequestFullscreen) {
      element.current.msRequestFullScreen();
    }
    if (callback && typeof callback === "function") {
      callback(true);
    }
  };

  const exitFull = (callback) => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFull = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFull);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://cdn.shopify.com/s/files/1/1790/1665/products/sonor-sonor-vintage-series-drum-set-w-20-bass-drum-drum-sets_1024x1024.jpg?v=1571609244" />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
