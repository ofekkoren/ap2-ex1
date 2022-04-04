import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LogIn from './logIn/LogIn';
import SignIn from "./signIn/SignIn";
import ChatScreen from './chatScreen/ChatScreen';
// import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

ReactDOM.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path='/ChatScreen' element={<ChatScreen />}></Route>
  //     <Route path='/LogIn' element={<LogIn />}></Route>
  //   </Routes>
    
    <React.StrictMode>
      <ChatScreen />
    </React.StrictMode>,
    
    document.getElementById('root')
    // </BrowserRouter>
);