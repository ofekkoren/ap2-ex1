import React, {useEffect} from 'react';
import './ChatScreen.css';
import {useState, useRef} from "react";
import LeftScreen from './LeftScreen';
import RightScreen from "./RightScreen";
import users from "../db/UsersDataBase";
import {isUserLoggedIn} from '../logIn/LogIn';
import {useLocation} from "react-router-dom";
import {user} from '../logIn/LogIn';

function ChatScreen() {
    // location.state.name
    const location = useLocation();
    // console.log(location.state.user);

    let [currentConversation, setCurrentConversation] = useState("");
    let conversationDBRef = useRef(""); //Reference to the original location of the conversation in the DB.

    //var y = window.scrollY;

    useEffect(() => {
        //Applying the function only if a chat was chosen by the user.
        if (currentConversation !== "") {
            //If a new message was sent in the current chat we add this message to the corresponding array in our DB.
            if (currentConversation.messages.length !== conversationDBRef.current.messages.length) {
                conversationDBRef.current.messages.push(currentConversation.messages[currentConversation.messages.length - 1])
                let bottom = document.getElementById("lastMessage");
                //Scrolling down to the last message when sending a new message or selecting an other chat.
                if (currentConversation.messages[currentConversation.messages.length - 1].sender === user.username) {
                    bottom.scrollIntoView({block: "end"});

                    /*
                     * If the last message sent was a video or we changed the chat conversation a timeout is set to let
                     * the video players to open up.
                     */
                    if (currentConversation.messages[currentConversation.messages.length - 1].type === "video")
                        setTimeout(() => {
                            bottom.scrollIntoView({block: "end"});
                        }, 600);
                }
            }
        }
    }, [currentConversation])


    // props.username = users[0]; // TODO Used for debug,will be deleted in the future

    if (user === "") {
        alert("bad!")
    } else {
        return (
            <div className="container-chat-screen justify-content-center">
                <div className="inner-chat-cube">
                    {/* <LeftScreen logInUsername="Ofek Koren"/> */}
                    <LeftScreen user={user} setChat={setCurrentConversation} refer={conversationDBRef}/>
                    <RightScreen chat={currentConversation} setChat={setCurrentConversation} user={user}/>
                </div>
            </div>
        );
    }
}

export default ChatScreen;