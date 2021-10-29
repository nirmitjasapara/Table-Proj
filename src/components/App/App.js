import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import LandingPage from "../../routes/LandingPage/LandingPage";
import HomePage from "../../routes/HomePage/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route component={Header} />
      <div className="App_main">
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <Route exact path={"/visualize/:symbol"} component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
