import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import { ContextController } from "./Context";
import Lyrics from "./components/layout/tracks/Lyrics";

function App() {
  return (
    <ContextController>
      <Router>
        <>
          <Navbar></Navbar>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}></Route>
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </>
      </Router>
    </ContextController>
  );
}

export default App;
