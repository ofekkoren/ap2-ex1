import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LogIn from './logIn/LogIn';
import SignIn from "./signIn/SignIn";
import ChatScreen from './chatScreen/ChatScreen';

ReactDOM.render(
  <React.StrictMode>
    <ChatScreen />
  </React.StrictMode>,
  document.getElementById('root')
);