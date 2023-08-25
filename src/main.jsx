import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MinutesToHours from "./components/MinutesToHours";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MinutesToHours />;
    <App />
  </React.StrictMode>
);
