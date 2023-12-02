import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const infoEl = document.createElement("div");
infoEl.id = "info";
infoEl.textContent =
  window.count +
  " JSX modules loaded in " +
  (performance.now() - window.start).toFixed(2) +
  "ms";
document.body.prepend(infoEl);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
