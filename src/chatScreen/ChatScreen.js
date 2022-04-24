import React, {useEffect} from 'react';
import './ChatScreen.css';
import {useState, useRef} from "react";
import LeftScreen from './LeftScreen';
import RightScreen from "./RightScreen";
import users from "../db/UsersDataBase";
import {Link, useLocation} from "react-router-dom";
import {user} from '../logIn/LogIn';

function ChatScreen() {
    // location.state.name
    const location = useLocation();
    // console.log(location.state.user);

    let [currentConversation, setCurrentConversation] = useState("");
    let conversationDBRef = useRef(""); //Reference to the original location of the conversation in the DB.
    let [currentListOfChats, setCurrentListOfChats] = useState(user.chats);


    /**
     * Scrolls to the bottom element after a timeout of 600 ms.
     * @param bottom an element that the page will scroll to.
     */
    const scrollWithDelay = (bottom) => {
        setTimeout(() => {
            bottom.scrollIntoView({block: "end"});
        }, 600);
    }

    useEffect(() => {
        //Applying the function only if a chat was chosen by the user.
        if (currentConversation !== "") {
            let bottom = document.getElementById("lastMessage");
            //If a new message was sent in the current chat we add this message to the corresponding array in our DB.
            if (currentConversation.messages.length !== conversationDBRef.current.messages.length) {
                conversationDBRef.current.messages.push(currentConversation.messages[currentConversation.messages.length - 1])
                              //Scrolling down to the last message if the user sent a new message.
                if (currentConversation.messages[currentConversation.messages.length - 1].sender === user.username) {
                    bottom.scrollIntoView({block: "end"});
                    //If the last message sent was a video, a timeout is set to let the video players to open up.
                    if (currentConversation.messages[currentConversation.messages.length - 1].type === "video")
                        scrollWithDelay(bottom)
                }
            }
            //If we changed the chat conversation a timeout is set to let the video players to open up.
            else {
                bottom.scrollIntoView({block: "end"});
                scrollWithDelay(bottom)
            }

                // Finding the index of the current conversation in the array of conversations the user is having.

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
        }
    }, [currentConversation])


    // props.username = users[0]; // TODO Used for debug,will be deleted in the future

    //If there is no user connected the chat screen won't be displayed.
    if (user === "") {
        return (
            <div className="sign-up-form">
                <h4 className="text-center" role="alert">You have to log-in in order to see the chat screen.<br/><br/>
                    You can click <Link to='/' className="text">here</Link> to log-in.<br/>
                </h4>
            </div>
        )

    } else {
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