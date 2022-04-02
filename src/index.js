import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from "./signIn/SignIn";
import LogIn from "./logIn/LogIn";

ReactDOM.render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
  document.getElementById('root')
);