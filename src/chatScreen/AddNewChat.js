import React from 'react';
import conversations from '../db/Conversations';
import users from '../db/UsersDataBase';
import LeftScreen from './LeftScreen';
import LeftChatItem from './leftChatItem/LeftChatItem';
import ChooseNewChat from './ChooseNewChat';

function AddNewChat(props) {

    var isRegisteredUser = false;
    
    // If the user entered his contact's identifier username, do nothing. 
    if (props.logInUsername === props.newContact) {
        return;
    }

    for (var i = 0; i < Object.keys(props.conversationsList).length; i++) {
        // If the user already have a conversation with this contact, do nothing.
        if (props.conversationsList[i].props.conversation.usernameInChat === props.newContact) {
            var invalidUser = "this user is already talking with you!"
            document.getElementById("validation").innerHTML = invalidUser;
            return;
        }
    }

    var user;
    for (var i = 0; i < Object.keys(users).length; i++) {
        if (props.logInUsername == users[i].username) {
            user = users[i];
        }
    }

    var newConversation;
    for (var i = 0; i < Object.keys(users).length; i++) {
        // If the user already have a conversation with this contact, do nothing.
        if (props.newContact === users[i].username) {
            isRegisteredUser = true;
            //add its username, nickname, image
            newConversation = {
                users: [{ username: user.username, nickname: user.nickname, image: user.image },
                { username: users[i].username, nickname: users[i].nickname, image: users[i].image }],
                messages: []
            }
        }
    }


    //If the user is not registered, do nothing.
    if (!isRegisteredUser) {
        // var textBox = document.getElementById("floatingTextarea");
        // textBox.append("Some text");
        var invalidUser = "invalid user!"
        document.getElementById("validation").innerHTML = invalidUser;
        return;
    } else {
        var invalidUser = "user added successfully!"
        document.getElementById("validation").innerHTML = invalidUser;
        return newConversation;
    }
    // return (
    //     // {conversationsList}
    //     // console.log("hellllee")
    //     <div className="col-4 newtab">
    //         <div>hello</div>
    //         {/* <div>
    //     //         {conversationsList}
    //     //     </div> */}
    //     </div>
    // );
}

export default AddNewChat;