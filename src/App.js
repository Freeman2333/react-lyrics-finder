import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import { Provider } from "./Context";

function App() {
  return (
    <Provider>
      <Router>
        <>
          <Navbar></Navbar>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}></Route>
            </Switch>
          </div>
        </>
      </Router>
    </Provider>
  );
}

export default App;
