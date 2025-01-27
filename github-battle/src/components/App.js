import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Popular from "./Popular";
import Battle from "./Battle";
import Navigation from "./Navigation";

const App = () => (
  <Router>
    <div className="container">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/popular" component={Popular} />
        <Route exact path="/battle" component={Battle} />
        <Route
          render={() => {
            return <p>Not Found!</p>;
          }}
        />
      </Switch>
    </div>
  </Router>
);

export default App;
