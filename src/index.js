import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LogIn from './logIn/LogIn';
import SignUp from "./signUp/SignUp";
import ChatScreen from './chatScreen/ChatScreen';
import SuccessfulSignUp from "./signUp/SuccessfulSignUp";
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';

// var isUserLoggedIn = 0;
// export default isUserLoggedIn;
// export function setIsUserLoggedIn(newVal) {
//   isUserLoggedIn = newVal;
// }

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LogIn/>}/>
            <Route path="signUp" element={<SignUp/>}/>
            <Route path="chatScreen" element={<ChatScreen/>}/>
            <Route path="signUp/SuccessfulSignUp" element={<SuccessfulSignUp/>}/>
        </Routes>
    </BrowserRouter>,

    // <React.StrictMode>
    //   <ChatScreen />
    // </React.StrictMode>,

    document.getElementById('root')
);