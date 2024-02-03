import "vite/modulepreload-polyfill";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { getRouter } from "./router.jsx";

import { RouterProvider } from "react-router-dom";

const mount = (element) => {
  const root = ReactDOM.createRoot(element);
  const router = getRouter();

  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );

  return () => {
    root.unmount();
  };
};

export default mount;
