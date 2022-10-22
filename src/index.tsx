import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import type { ConfigOptions } from "@web3modal/react";
import { Web3Modal } from "@web3modal/react";

const config: ConfigOptions = {
  projectId: "6ff1b53fe47d79442b512fd9a01b449b",
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "web3Modal",
  },
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Web3Modal config={config} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
