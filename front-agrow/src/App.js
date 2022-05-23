import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Router, Switch} from "react-router-dom";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <div className="App h-100">
        <nav className="w-100 py-1">
            <div className="row row-cols-4">
                <div className="col"><Link to="/stages">Stages</Link> </div>
                <div className="col"><Link to="/sensors">Sensors</Link></div>
                <div className="col"><Link to="/reports">Reports</Link></div>
                <div className="col"><Link to="/products">Products</Link></div>
            </div>
        </nav>
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
