import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LogIn from './logIn/LogIn';
import SignIn from "./signIn/SignIn";

ReactDOM.render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
  document.getElementById('root')
);