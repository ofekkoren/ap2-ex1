import React, { useEffect } from 'react';
import './ChatScreen.css';
import { useState, useRef } from "react";
import LeftScreen from './LeftScreen';
import RightScreen from "./RightScreen";
import users from "../db/UsersDataBase";
import { isUserLoggedIn } from '../logIn/LogIn';
import { useLocation } from "react-router-dom";
import { user } from '../logIn/LogIn';

function ChatScreen() {
    // location.state.name
    const location = useLocation();
    // console.log(location.state.user);

    let [currentConversation, setCurrentConversation] = useState("");
    let conversationDBRef = useRef(""); //Reference to the original location of the conversation in the DB.
    let [currentListOfChats, setCurrentListOfChats] = useState(user.chats);

    // function updateListOfConversations(setConversations, currentListOfChats) {
    //     // console.log(currentListOfChats)
    //     var getInfo = {setConversations:setConversations, currentListOfChats:currentListOfChats}
    //     // console.log(getInfo)
    //     // currentListOfChats.pop();
    //     // currentListOfChats.unshift(currentConversation);
    //     // let chatsArr = [...currentListOfChats, currentConversation];
    //     // setConversations(chatsArr);
    //     return getInfo;

    // }

    useEffect(() => {
        //Applying the function only if a chat was chosen by the user.
        if (currentConversation !== "") {
            //If a new message was sent in the current chat we add this message to the corresponding array in our DB.
            if (currentConversation.messages.length !== conversationDBRef.current.messages.length) {
                conversationDBRef.current.messages.push(currentConversation.messages[currentConversation.messages.length - 1])

                // Finding the index of the current conversation in the array of conversations the user is having.

                // var currentConversationIndex = currentListOfChats.indexOf(conversationDBRef);

                var index = -1;
                for (var i = 0; i < Object.keys(currentListOfChats).length; i++) {
                    if (currentListOfChats[i].users === currentConversation.users) {
                        index = i;
                    }
                }

                // If the current conversaion is in the array, add it to the front of the array.
                if (index !== -1) {
                    // var chatsArr = [...currentListOfChats];
                    // var chatsArr = currentListOfChats.slice();
                    let chatsArr = [...currentListOfChats];
                    // console.log(chatsArr)
                    chatsArr.splice(index, 1);
                    chatsArr.unshift(currentConversation);
                    // var chatsArr = [...currentListOfChats, currentConversation];
                    // chatsArr.splice(index, 1);
                    // chatsArr.unshift(currentConversation);

                    // console.log(chatsArr);
                    user.chats=chatsArr;
                    // console.log(chatsArr);
                    setCurrentListOfChats(chatsArr);
                    // console.log(currentListOfChats);
                }
                // console.log(currentConversationIndex);
                // console.log(currentListOfChats);
                // currentListOfChats.unshift(props.currentConversation);
                // let chatsArr = [...currentListOfChats, currentConversation];
                // setConversations(chatsArr);
            }
            //Scrolling down to the last message when sending a new message or selecting an other chat.
            let bottom = document.getElementById("lastMessage");
            bottom.scrollIntoView({ block: "end" });

            // if(updateListOfConversations().setConversations !== undefined && updateListOfConversations().currentListOfChats !== undefined) {
            //     // console.log(updateListOfConversations());
            // }
            // let chatsArr = [...updateListOfConversations().currentListOfChats, currentConversation];
            // updateListOfConversations.setConversations(chatsArr);


        }
    }, [currentConversation])


    // props.username = users[0]; // TODO Used for debug,will be deleted in the future

    if (isUserLoggedIn === 0) {
        alert("bad!")
    }

    else {
        return (
            <div className="container-chat-screen justify-content-center">
                <div className="inner-chat-cube">
                    {/* <LeftScreen logInUsername="Ofek Koren"/> */}
                    <LeftScreen currentConversation={currentConversation} user={user} setChat={setCurrentConversation} refer={conversationDBRef} currentListOfChats={currentListOfChats} setCurrentListOfChats={setCurrentListOfChats} />
                    {/* <LeftScreen currentConversation={currentConversation} user={user} setChat={setCurrentConversation} refer={conversationDBRef} updateListOfConversations={updateListOfConversations} /> */}
                    <RightScreen chat={currentConversation} setChat={setCurrentConversation} user={user} />
                </div>
            </div>
        );
    }
}

export default ChatScreen;