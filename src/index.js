import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { UserProvider } from "./components/contexts/user-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <UserProvider>
      <App />
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
