import React from 'react';
import './ChatScreen.css';
import { useState } from "react";
import LeftScreen from './LeftScreen';
import RightScreen from "./RightScreen";
import users from "../db/UsersDataBase";

function ChatScreen(user) {
    let [currentConversation, setCurrentConversation] = useState("");

    return (
        <div className="container-chat-screen justify-content-center">

            <div className="inner-chat-cube">
                <LeftScreen logInUsername="Ofek Koren"/>
                <RightScreen chat={currentConversation} setChat={setCurrentConversation} user={user}/>
            </div>
        </div>
    );
}

export default ChatScreen;