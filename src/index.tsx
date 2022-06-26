import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ResumeContextProvider from "./context/context";
import "./globalStyle.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ResumeContextProvider>
      <App />
    </ResumeContextProvider>
  </React.StrictMode>
);
