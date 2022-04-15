import React, {useEffect} from 'react';
import './ChatScreen.css';
import {useState, useRef} from "react";
import LeftScreen from './LeftScreen';
import RightScreen from "./RightScreen";

import users from "../db/UsersDataBase";

function ChatScreen(user) {

    let [currentConversation, setCurrentConversation] = useState("");
    let conversationDBRef = useRef(""); //Reference to the original location of the conversation in the DB.

    useEffect(() => {
        //Applying the function only if a chat was chosen by the user.
        if (currentConversation !== "") {
            //If a new message was sent in the current chat we add this message to the corresponding array in our DB.
            if (currentConversation.messages.length !== conversationDBRef.current.messages.length) {
                conversationDBRef.current.messages.push(currentConversation.messages[currentConversation.messages.length - 1])
            }
            //Scrolling down to the last message when sending a new message or selecting an other chat.
            let bottom = document.getElementById("lastMessage");
            bottom.scrollIntoView({block:"end"});
        }
    }, [currentConversation])

    user = users[2]; // TODO Used for debug,will be deleted in the future

    return (
        <div className="container-chat-screen justify-content-center">
            <div className="inner-chat-cube">
                <LeftScreen logInUsername="Ofek Koren"/>
//                 <LeftScreen logInUsername="Moti Luhim" setChat={setCurrentConversation} refer={conversationDBRef}/>
                <RightScreen chat={currentConversation} setChat={setCurrentConversation} user={user}/>
            </div>
        </div>
    );
}

export default ChatScreen;