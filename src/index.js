import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { UserProvider } from "./contexts/user-context";
import { LikeProvider } from "./contexts/like-context";
import { PostProvider } from "./contexts/post-context";
import { Provider } from "react-redux";
import  {store}   from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

// Call make Server
makeServer();

root.render(
  <React.StrictMode>
    <Router>
        <Provider store={store}>
      <UserProvider>
        <PostProvider >
          <App />
        </PostProvider>
      </UserProvider>
        </Provider>
    </Router>
  </React.StrictMode>
);
