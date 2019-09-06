import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

import MncApolloProvider from "./Apollo/GraphQLService";

const Application = () => (
  <MncApolloProvider>
    <App />
  </MncApolloProvider>
);

ReactDOM.render(<Application />, document.getElementById("root"));
