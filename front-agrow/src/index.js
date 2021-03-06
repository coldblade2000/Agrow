import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Link} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <>
                <div className="topbar d-flex justify-content-center align-items-center">
                    <h1 className="text-white w-100 text-center p-2">
                        <Link style={{textDecoration: 'none', color: 'inherit'}}
                              to="/"><i className="bi bi-flower1 pr-2"></i>Agrow</Link>
                    </h1>

                </div>
                <App/>
            </>
        </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
