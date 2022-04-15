import './ChatScreen.css';
import "./RightScreen.css"
import {getFormattedDateString} from "./Utils";

/**
 * A component of a single chat message.
 * @param props contains the information about a message in the chat
 */
function Message(props) {

    const createMessageContent = (message) => {
        console.log(message)
        if (message.type === "text")
            return (<h6 className="text-message" key={props.index}>{props.message.content}</h6>)
        if (message.type === "image")
            return (<div><img src={message.content} className="image-message" key={props.index}/></div>)
    }

    return (
        <div
            className={"general-message " + (props.user.username === props.message.sender ? 'sent-message' : 'received-message')}>
            {createMessageContent(props.message)}
            <span className="text-date" key={props.index}>{getFormattedDateString(props.message)}</span>
        </div>
    )

}

export default Message;