import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Alert from "./Components/Alert";
import Stages from "./Components/Stages";

function App() {
    // Cosas para mostrar alertas del app
    const [alerts, setAlerts] = useState([])
    const renderAlerts = () => {
        return alerts.map(alert =>
            <Alert level={alert.level} key={alert.level + alert.msg} msg={alert.msg} alerts={alerts}
                   setAlerts={setAlerts}/>)
    }
    /**
     *  Funcion para mostrar una alerta
     * @param {'alert-primary' | 'alert-secondary' | 'alert-success' | 'alert-danger' | 'alert-warning' | 'alert-info'} level - Alert level
     * @param msg
     */
    const sendAlert = (level, msg) => {
        setAlerts([...alerts, {level, msg}])
    }

    return (
        <div className="App h-100">

            <nav className="w-100 py-1">
                <div className="row row-cols-4">
                    <div className="col"><Link to="/stages">Stages</Link></div>
                    <div className="col"><Link to="/sensors">Sensors</Link></div>
                    <div className="col"><Link to="/reports">Reports</Link></div>
                    <div className="col"><Link to="/products">Products</Link></div>
                </div>
            </nav>
            <div className="alertList d-flex flex-column mx-3">
                {renderAlerts()}
            </div>
            <Switch>
                <Route path="/stages">
                    <Stages sendAlert={sendAlert}/>
                </Route>
                {/*TODO cambiar estos componentes*/}
                <Route path="/sensors">
                    <LandingPage/>
                </Route>
                <Route path="/reports">
                    <LandingPage/>
                </Route>
                <Route path="/products">
                    <LandingPage/>
                </Route>
                <Route exact path="/">
                    <LandingPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
