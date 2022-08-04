import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProjectPageContextProvider } from "./context/ProjectPageContext";
import { WindowWidthContextProvider } from "./context/WindowWidthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <WindowWidthContextProvider>
      <ProjectPageContextProvider>
        <App />
      </ProjectPageContextProvider>
    </WindowWidthContextProvider>
  </React.StrictMode>
);
