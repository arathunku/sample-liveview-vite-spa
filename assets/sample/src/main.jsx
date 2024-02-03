import "vite/modulepreload-polyfill";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const mount = (element) => {
  const root = ReactDOM.createRoot(element);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );

  return () => {
    root.unmount();
  };
};

export default mount;
