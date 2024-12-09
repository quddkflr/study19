import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from "./chapter_02/Library";
import Clock from "./chapter_03/Clock";

//ReactDOM.render(
//    <React.StrictMode>
//        <Library />
//    </React.StrictMode>,
//    document.getElementById('root')
//);

setInterval(() => {
    ReactDOM.render(
        <React.StrictMode>
            <Clock />
        </React.StrictMode>,
        document.getElementById('root')
    );
}, 1000);

reportWebVitals();