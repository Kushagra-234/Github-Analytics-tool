import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
console.log(window.location.origin);
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-j4mhfsfg.us.auth0.com" // Your Auth0 Application Domain
      clientId="Yaetq0URJUdHRiVo99BlsLZbKZ0VO9rD" // // Your Auth0 Client ID
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
