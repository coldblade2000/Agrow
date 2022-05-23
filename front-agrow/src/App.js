import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Router, Switch} from "react-router-dom";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <div className="App h-100">
        <Switch>
            <Route path={"/stages"}>
                <LandingPage/>
            </Route>
            <Route path={"/sensors"}>
                <LandingPage/>
            </Route>
            <Route path={"/reports"}>
                <LandingPage/>
            </Route>
            <Route path={"/products"}>
                <LandingPage/>
            </Route>
            <Route path={"/"}>
                <LandingPage/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
