import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LogIn from './logIn/LogIn';
import SignIn from "./signIn/SignIn";
import ChatScreen from './chatScreen/ChatScreen';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

var isUserLoggedIn = 0;
export default isUserLoggedIn;
export function setIsUserLoggedIn(newVal) {
  isUserLoggedIn = newVal;
}

ReactDOM.render(
  
  // <BrowserRouter>
  //   <Routes>
  //     {/* <Route path='/ChatScreen' element={<ChatScreen />}></Route> */}
  //     <Route path='/LogInScreen' element={<LogIn />}></Route>
  //   </Routes>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="signUp" element={<SignIn />} />
      <Route path="chatScreen" element={<ChatScreen />} />
    </Routes>
  </BrowserRouter>,

    // <React.StrictMode>
    //   <ChatScreen />
    // </React.StrictMode>,

    document.getElementById('root')
);