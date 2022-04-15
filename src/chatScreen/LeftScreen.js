import './ChatScreen.css';
import './LeftScreen.css';
import './leftChatItem/LeftChatItem.css';
import users from '../db/UsersDataBase';
import LeftChatItem from './leftChatItem/LeftChatItem';
import conversations from '../db/Conversations';
import { useState, useRef } from "react";
import ChooseNewChat from './ChooseNewChat';
import AddNewChat from './AddNewChat';


function LeftScreen({ logInUsername }) {
    // function LeftScreen(props,{ logInUsername }) {

    //put list of chats for debug.
    let [currentListOfChats, setcurrentListOfChats] = useState(users[0].chats);
    // console.log(users[0].chats)
    // let newChatDBRef = useRef("");

    var logInUserImage;

    /*
     * The function returns the conversations of the current log-in user, according
     * to the username (his id). 
    */
    function getUsersChats(logInUsername) {
        for (var i = 0; i < Object.keys(users).length; i++) {
            if (users[i].username.localeCompare(logInUsername) === 0) {
                // numOfConversations = Object.keys(users[i].chats).length;
                return users[i];
            }
        }
    }


    // Chats holds all the conversations of the current log-in user.
    var chats = getUsersChats(logInUsername).chats;
    // Keeping the current log-in user's profile image.
    logInUserImage = getUsersChats(logInUsername).image;


    var relevantInfo = [];
    var usernameInChat = "";
    var lastMessage = "";
    var time = "";
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
        if (chats[i].users[0].username.localeCompare(logInUsername) == 0) {
            usernameInChat = chats[i].users[1].username;
        } else {
            usernameInChat = chats[i].users[0].username;
        }
        lastMessage = chats[i].messages[chats[i].messages.length - 1].content;
        type = chats[i].messages[chats[i].messages.length - 1].type;
        time = chats[i].messages[chats[i].messages.length - 1].createdAt;
        image = getUsersChats(usernameInChat).image;
        relevantInfo.push({ usernameInChat: usernameInChat, type: type, lastMessage: lastMessage, time: time, image: image });
    }


    var conversationsList;
    conversationsList = currentListOfChats.map((conversation, index) => {
        return <LeftChatItem {...relevantInfo[index]} key={index} />
    });


    return (
        ///
        <div className="col-4 leftScreen">
            <div className="topLine">
                <button className="bi bi-person-plus-fill add-conversation ms-3" data-bs-toggle="modal" data-bs-target="#add-new-contact"></button>
                <img src={logInUserImage} className="float-start top-left-profile-image"></img>
                {/* <img src={logInUserImage} className="top-profile-image"></img> */}

                    <h5 className='top-left-username'>{logInUsername}</h5>
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

                <ChooseNewChat logInUsername={logInUsername} conversationsList={conversationsList} currentListOfChats={currentListOfChats} setcurrentListOfChats={setcurrentListOfChats} />
            </div>
    );
}

export default LeftScreen;