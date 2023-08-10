import React from "react";
import {BrowserRouter,HashRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";


import './style/style.scss'
import {App} from "./component/App.jsx";




const root = createRoot(document.getElementById('app'));
root.render(
    <HashRouter>
        <App/>
    </HashRouter>
);


