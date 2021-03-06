import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import LandingPage from "../../routes/LandingPage/LandingPage";
import HomePage from "../../routes/HomePage/HomePage";
import "./App.css";
import AddPage from "../../routes/AddPage/AddPage";

function App() {
  return (
    <div className="App">
      <Route component={Header} />
      <div className="App_main">
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <Route path={"/visualize/:symbol"} component={HomePage} />
          <Route path={"/visualize"} component={HomePage} />
          <Route path={"/add"} component={AddPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
