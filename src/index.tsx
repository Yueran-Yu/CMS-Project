import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import "./App.css";
import { loadServer, DevTools } from "jira-dev-tool";
// antd must imported behind jira-dev-tool
import "antd/dist/antd.less";
import { AppProviders } from "./context";

loadServer(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <DevTools />
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById("root")
  );
});
