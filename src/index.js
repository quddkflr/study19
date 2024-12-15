import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from "./chapter_02/Library";
import Clock from "./chapter_03/Clock";
import CommentList from "./chapter_04/CommentList";
import NotificationList from "./chapter_05/NotificationList";
import Accommodate from "./chapter_06/Accommodate";
import ConfirmButton from "./chapter_07/ConfirmButton";
import LandingPage from "./chapter_08/LandingPage";
import AttendanceBook from "./chapter_09/AttendanceBook";

//ReactDOM.render(
//    <React.StrictMode>
//        <Library />
//    </React.StrictMode>,
//    document.getElementById('root')
//);

//setInterval(() => {
//    ReactDOM.render(
//        <React.StrictMode>
//            <Clock />
//        </React.StrictMode>,
//        document.getElementById('root')
//    );
//}, 1000);

//ReactDOM.render(
//    <React.StrictMode>
//        <CommentList />
//    </React.StrictMode>,
//    document.getElementById('root')
//);

//ReactDOM.render(
//    <React.StrictMode>
//        <NotificationList />
//    </React.StrictMode>,
//    document.getElementById('root')
//);

//ReactDOM.render(
//    <React.StrictMode>
//        <Accommodate />
//    </React.StrictMode>,
//    document.getElementById('root')
//);

//ReactDOM.render(
//    <React.StrictMode>
//        <ConfirmButton />
//    </React.StrictMode>,
//    document.getElementById('root')
//);

//ReactDOM.render(
//    <React.StrictMode>
//        <LandingPage />
//    </React.StrictMode>,
//    document.getElementById('root')
//);

ReactDOM.render(
    <React.StrictMode>
        <AttendanceBook />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();