import './ChatScreen.css';
import "./RightScreen.css"
import {useState} from "react";
import users from "../db/UsersDataBase";
import Conversations from "../db/Conversations";
import conversations from "../db/Conversations";

/**
 * The body of the chat
 * @param props inlude the information of the user currently logged-in and the current chosen conversation.
 */
function RightScreen(props) {
    /*
        let [currentConversation, setCurrentConversation] = useState(props.chat);
    */

    //If no chat was chosen by the user, no name or image will or message box will be displayed.
    if (props.chat === "") {
        return (
            <div className="col rightScreen">
                <ChatHeader chatWith={""}></ChatHeader>
            </div>
        )
    }
    //Checking which of the chat participants is the signed-in user. The second participant is the user we chat with.
    else {
/*        console.log(conversations)
        console.log(users)*/

        if (props.user.username === props.chat.users[0].username) {
            return (
                <div className="col rightScreen">
                    <ChatHeader chatWith={props.chat.users[1]}></ChatHeader>
                    <div className="chat-body">
                        {props.chat.messages.map((message, index) => (
                            <div className="user" key={index}>{message.content}</div>
                        ))}
                    </div>
                    <ChatTextBox chat={props.chat} setChat={props.setChat}
                                 sendingUser={props.user}></ChatTextBox>
                </div>
            )
        } else {
            return (
                <div className="col rightScreen">
                    <ChatHeader chatWith={props.chat.users[0]}></ChatHeader>
                    <div className="chat-body">
                        {props.chat.messages.map((message, index) => (
                            <div className="user" key={index}>{message.content}</div>
                        ))}
                    </div>
                    <ChatTextBox chat={props.chat} setChat={props.setChat}
                                 sendingUser={props.user}></ChatTextBox>
                </div>
            )
        }
    }

}

export default RightScreen;

/**
 * The header of the chat. It includes an image and the nickname of the user we currently chat with.
 * @param props includes the user we currently chat with.
 */
function ChatHeader(props) {
    if (props.chatWith === "") {
        return (<div className="topLine"></div>)
    } else {
        return (
            <div className="topLine">
                <img src={process.env.PUBLIC_URL + props.chatWith.image}
                     className="float-start top-profile-image"></img>
                <h5>{props.chatWith.nickname}</h5>
            </div>
        )
    }
}

/**
 * The body of the chat which will contain the messages.
 * @param props includes the current chat of the user and a setter method.
 */
function ChatTextBox(props) {

    const handleSendClick = (event) => {
        //TODO delete it
        /*let message = document.getElementById("textBox").value;
        if (message.trim() !== "") {
            props.chat.messages.push({
                content: message,
                createdAt: new Date().toISOString(),
                sender: props.sendingUser.username
            })
            document.getElementById("textBox").value = "";
            console.log(props.chat)
        }*/

        //Getting the message typed by the user
        let message = document.getElementById("textBox").value;
        //If the user didn't type a message we won't send an empty string, Else we add the message to the chat.
        if (message.trim() !== "") {
            let messageInfo = {
                type: "text",
                content: message,
                createdAt: new Date().toISOString(),
                sender: props.sendingUser.username
            }
            //Appending the message to the end of the messages array.
            let messagesArr = [...props.chat.messages, messageInfo]
            props.setChat({users: props.chat.users, messages: messagesArr})
            //Clearing the chat message box.
            document.getElementById("textBox").value = "";
        }
    }

    return (
        <div className="bottom-input-line">

            {/*audio/video/photo button*/}
            <button type="button" className="btn-lg btn-outline-secondary bottom-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-paperclip" viewBox="0 0 16 16">
                    <path
                        d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                </svg>
            </button>

            {/*text box for writting messages*/}
            <textarea id="textBox" className="form-control-lg message-box" rows="1"
                      placeholder="Type a message"></textarea>

            {/*send button*/}
            <button type="button" className="btn-lg btn-outline-secondary float-end bottom-btn"
                    onClick={handleSendClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-send" viewBox="0 0 16 16">
                    <path
                        d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                </svg>
            </button>

        </div>
    )
}
