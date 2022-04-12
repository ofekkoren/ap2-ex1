import React from 'react';
import conversations from '../db/Conversations';
import users from '../db/UsersDataBase';
import LeftScreen from './LeftScreen';
import LeftChatItem from './leftChatItem/LeftChatItem';
import './AddNewChat.css';

function AddNewChat(logInUsername, conversationsList, newContact, relevantInfo) {
    var isRegisteredUser = false;

    // If the user entered his contact's identifier username, do nothing. 
    if (logInUsername == newContact) {
        return;
    }
    for (var i = 0; i < Object.keys(conversationsList).length; i++) {
        // If the user already have a conversation with this contact, do nothing.
        if (conversationsList[i].usernameInChat == newContact) {
            return;
        }
    }

    var user;
    for (var i = 0; i < Object.keys(users).length; i++) {
        // If the user already have a conversation with this contact, do nothing.
        if (logInUsername == users[i].username) {
            user = users[i];
        }
    }
    var newConversation;
    for (var i = 0; i < Object.keys(users).length; i++) {
        // If the user already have a conversation with this contact, do nothing.
        if (newContact == users[i].username) {
            isRegisteredUser = true;
            //add its username, nickname, image
            newConversation = {
                users: [{ username: user.username, nickname: user.nickname, image: user.image },
                { username: users[i].username, nickname: users[i].nickname, image: users[i].image }],
                messages: [{ type: "", content: "", createdAt: "" }]
            }
        }
    }
    //If the user is not registered, do nothing.
    if (!isRegisteredUser) {
        return;
    } else {
        var usernameInChat = "";
        var lastMessage = "";
        var time = "";
        var image;
        var type = "";
        conversations.unshift(newConversation);
        // console.log(conversationsList);

        // Adding new conversation as a LeftChatItem to relevantInfo map.
        lastMessage = newConversation.messages[Object.keys(newConversation.messages).length - 1].content;
        type = newConversation.messages[Object.keys(newConversation.messages).length - 1].type;
        time = newConversation.messages[Object.keys(newConversation.messages).length - 1].createdAt;
        image = newConversation.users[1].image;

        relevantInfo.unshift({ usernameInChat: newContact, type: type, lastMessage: lastMessage, time: time, image: image });
        conversationsList = relevantInfo.map((conversation, key) => {
            return <LeftChatItem {...conversation} key={key} />
        });
        // var conversation = { usernameInChat: newContact, type: type, lastMessage: lastMessage, time: time, image: image }
        // <LeftChatItem usernameInChat={newContact} type={type} lastMessage={lastMessage} time={time} image={image} />
    }
    return (
        // {conversationsList}

        <div className="col-4 newtab">
            <div className="newtab">hello</div>
            <div>
                {conversationsList}
            </div>
        </div>

    );
}

export default AddNewChat;