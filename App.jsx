import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Rectangle76 from "./components/Rectangle76";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|273_20870)">
          <Rectangle76 src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76-1@1x.png" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
