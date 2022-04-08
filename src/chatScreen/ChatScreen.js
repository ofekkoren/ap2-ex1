import './ChatScreen.css';
import { useState } from "react";
import LeftScreen from './LeftScreen';
import RightScreen from "./RightScreen";
import React from 'react';
import users from '../db/UsersDataBase';

function ChatScreen(user) {
    let [currentConversation, setCurrentConversation] = useState("");
          
    return (
        <div className="container-chat-screen justify-content-center">
            <div className="inner-chat-cube">
                <LeftScreen logInUsername="Moti Luhim"/>
                <RightScreen/>
            </div>
        </div>
    );
}

export default ChatScreen;