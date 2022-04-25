import './ChatScreen.css';
import "./RightScreen.css"

/**
 * The header of the chat. It includes an image and the nickname of the user we currently chat with.
 * @param props includes the user we currently chat with.
 */
function ChatHeader(props) {
    if (props.chatWith === "") {
        return (<div className="topLine"></div>)
    }
else {
        return (
            <div className="topLine">
                <img src={props.chatWith.image}
                     className=" top-profile-image"></img>
                <h5>{props.chatWith.nickname}</h5>
            </div>
        )
    }
}

export default ChatHeader;