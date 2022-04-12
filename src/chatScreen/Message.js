import './ChatScreen.css';
import "./RightScreen.css"

function Message(props) {

    /**
     * @returns a formatted "day.month.year, hour:minutes" date string.
     */
    const getDateString = (message) => {
        let messageDate = new Date(message.createdAt);
        let day = messageDate.getDate();
        let month = messageDate.getMonth() + 1;
        let year = messageDate.getFullYear();
        let hour = messageDate.getHours();
        if (hour < 10)
            hour = "0" + hour;
        let minutes = messageDate.getMinutes();
        if (minutes < 10)
            minutes = "0" + minutes;
        return day + '.' + month + '.' + year + ", " + hour + ':' + minutes;
    }

    return (
        <div
            className={"general-message " + (props.user.username === props.message.sender ? 'sent-message' : 'received-message')}>
            <h6 className="text-message" key={props.index}>{props.message.content}</h6>
            <span className="text-date" key={props.index}>{getDateString(props.message)}</span>
        </div>
    )
}

export default Message;