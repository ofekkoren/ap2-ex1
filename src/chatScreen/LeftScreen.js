import './ChatScreen.css';
import './LeftScreen.css';
import './leftChatItem/LeftChatItem.css';
import users from '../db/UsersDataBase';
import LeftChatItem from './leftChatItem/LeftChatItem';
import conversations from '../db/Conversations';
import { useState, useRef } from "react";
import ChooseNewChat from './ChooseNewChat';
import {getFormattedDateString} from "./Utils";


function LeftScreen(props) {
    // console.log(props)

    // function LeftScreen(props,{ logInUsername }) {
    //put list of chats for debug.
    let [currentListOfChats, setcurrentListOfChats] = useState(props.user.chats);
    // console.log(users[0].chats)
    // let newChatDBRef = useRef("");

    var logInUserImage;

    /*
     * The function returns the conversations of the current log-in user, according
     * to the username (his id). 
    */
   //TODO - take the function to chatScreen
    function getUsersChats(logInUsername) {
        for (var i = 0; i < Object.keys(users).length; i++) {
            if (users[i].username.localeCompare(logInUsername) === 0) {
                // numOfConversations = Object.keys(users[i].chats).length;
                return users[i];
            }
        }
    }


    // Chats holds all the conversations of the current log-in user.
    //TODO
    // var chats = getUsersChats(props.user.logInUsername).chats;
    var chats = props.user.chats;

    // Keeping the current log-in user's profile image.
    //TODO
    //logInUserImage = getUsersChats(props.user.logInUsername).image;
    logInUserImage = props.user.image;


    var relevantInfo = [];
    var usernameInChat = "";
    var nicknameInChat = ""
    var lastMessage = "";
    var message = "";
    var image;
    var type = "";


    /*
     * For each conversation the current log-in user is having, we create the information
     * needed to be presented on the left side bar, including the contact's name, his profile picture,
     * the last message has been sent in the conversation and the time it was delivered.
    */
    for (var i = 0; i < Object.keys(chats).length; i++) {
        // If the username in the conversation information is our log-in username, the other username is the
        // contact's username.
        if (chats[i].users[0].username.localeCompare(props.user.username) == 0) {
            usernameInChat = chats[i].users[1].username;
            nicknameInChat = chats[i].users[1].nickname;
        } else {
            usernameInChat = chats[i].users[0].username;
            nicknameInChat = chats[i].users[0].nickname;
        }
        lastMessage = chats[i].messages[chats[i].messages.length - 1].content;
        type = chats[i].messages[chats[i].messages.length - 1].type;
        message = chats[i].messages[chats[i].messages.length - 1];
        image = getUsersChats(usernameInChat).image;
        relevantInfo.push({ nicknameInChat: nicknameInChat, type: type, lastMessage: lastMessage, time:getFormattedDateString(message), image: image });
    }

    // function showChat(chat) {
    //     console.log("hellooe")
    //     // props.refer.current = chat;
    //     // props.setChat(chat);
    // }

    var conversationsList;
    conversationsList = currentListOfChats.map((conversation, index) => {
        return <LeftChatItem conversation={relevantInfo[index]} key={index} chat={chats[index]} refer={props.refer} setChat={props.setChat} />

    });

    return (
        ///
        <div className="col-4 leftScreen">
            <div className="topLine">
                <img src={logInUserImage} className="float-start top-left-profile-image"></img>
                {/* <img src={logInUserImage} className="top-profile-image"></img> */}
                <h5 className='top-left-username'>{props.user.username}</h5>
                <button className="bi bi-person-plus-fill add-conversation ms-3" data-bs-toggle="modal" data-bs-target="#add-new-contact"></button>

            </div>

            {/* <div className="topLine">
                <img src={process.env.PUBLIC_URL + props.chatWith.image}
                     className=" top-profile-image"></img>
                <h5>{props.chatWith.nickname}</h5>
            </div> */}


            <div className="container">
                <div className="center-col" id="present-left-chat-items">
                    {conversationsList}
                </div>
            </div>

            <ChooseNewChat logInUsername={props.user.username} conversationsList={conversationsList} currentListOfChats={currentListOfChats} setcurrentListOfChats={setcurrentListOfChats} />
        
        </div>
    );
}

export default LeftScreen;