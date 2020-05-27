import React from "react";
import ReactDOM from "react-dom";

const useConfirm = (message = "", callback) => {
  if (typeof callback !== "function") {
    return;
  } else {
    const confirmAction = () => {
      if (confirm(message)) {
        callback();
      }
    };
    return confirmAction;
  }
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world");
  const confirmDelete = useConfirm("Are you sure", deleteWorld);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
