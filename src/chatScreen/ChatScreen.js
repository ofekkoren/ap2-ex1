import './ChatScreen.css';
import {useState} from "react";
import LeftScreen from './LeftScreen';
import RightScreen from "./RightScreen";
import users from "../db/UsersDataBase";

function ChatScreen(user) {
    let [currentConversation, setCurrentConversation] = useState(users[1].chats[0]);
    var chatcopy=users[0].chats[0]
    user=users[1]

    //Check use state option
    return (
        <div className="container-chat-screen justify-content-center">

            <div className="inner-chat-cube">
                <LeftScreen/>
                <RightScreen chat={currentConversation} setChat={setCurrentConversation} user={user}/>
            </div>
        </div>
    );
}

export default ChatScreen;