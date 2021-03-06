import React from "react";
import ReactDOM from "react-dom";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  } else {
    const fireNotif = () => {
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(title, options);
          } else {
            return;
          }
        });
      } else {
        new Notification(title, options);
      }
    };
    return fireNotif;
  }
};
const App = () => {
  const triggerNotification = useNotification("Can I steal your Kimchi?", {
    body: "I love Kimchi. Don't you?",
  });
  return (
    <div className="App">
      <button onClick={triggerNotification}>Hello</button>
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
