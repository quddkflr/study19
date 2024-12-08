import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from "./jsx/Library";

ReactDOM.render(
    <React.StrictMode>
        <Library />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();