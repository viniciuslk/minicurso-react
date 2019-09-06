import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.css";

import MncHeader from "./Components/Molecules/Header";

import { Container } from "reactstrap";

// Lazy loading
const About = React.lazy(() => import("./Components/Pages/About"));
const Todos = React.lazy(() => import("./Components/Pages/Todos"));

const Fallback = () => <h1>Loading...</h1>;

function App() {
  return (
    <div className="mnc-app">
      <Router>
        <Suspense fallback={<Fallback />}>
          <MncHeader dark color="dark" />

          <div className="mnc-app-content">
            <Container>
              <Route path="/todos" component={Todos} />
              <Route path="/sobre" component={About} />
              <Route path="*" render={() => <Redirect to="/todos" />} />
            </Container>
          </div>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
