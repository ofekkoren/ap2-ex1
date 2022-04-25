import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LogIn from './logIn/LogIn';
import SignUp from "./signUp/SignUp";
import ChatScreen from './chatScreen/ChatScreen';
import SuccessfulSignUp from "./signUp/SuccessfulSignUp";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LogIn/>}/>
            <Route path="signUp" element={<SignUp/>}/>
            <Route path="chatScreen" element={<ChatScreen/>}/>
            <Route path="signUp/SuccessfulSignUp" element={<SuccessfulSignUp/>}/>
        </Routes>
    </BrowserRouter>,

    document.getElementById('root')
);