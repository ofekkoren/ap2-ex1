import users from '../../../db/UsersDataBase';

function LeftChatItems({ logInUsername }) {
// var numOfConversations = 0;
// var logInUserImage;

// function getUsersChats(logInUsername) {
//     for (var i = 0; i < Object.keys(users).length; i++) {
//         if (users[i].username.localeCompare(logInUsername) === 0) {
//             numOfConversations = Object.keys(users[i].chats).length;
//             return users[i];
//         }
//     }
// }

// var chats = getUsersChats(logInUsername).chats;
// logInUserImage = getUsersChats(logInUsername).image;

// var relevantInfo = [];
// var usernameInChat = "";
// var lastMessage = "";
// var time = "";
// var image;
// var type = "";

// for(var i = 0; i < Object.keys(chats).length; i++) {
//     if(chats[i].users[0].username.localeCompare(logInUsername)==0){
//         usernameInChat = chats[i].users[1].username;
//     } else {
//         usernameInChat = chats[i].users[0].username;
//     }
//     lastMessage = chats[i].messages[chats[i].messages.length-1].content;
//     type = chats[i].messages[chats[i].messages.length-1].type;
//     time = chats[i].messages[chats[i].messages.length-1].createdAt;
//     image = getUsersChats(usernameInChat).image;
//     relevantInfo.push({usernameInChat:usernameInChat, type:type, lastMessage:lastMessage, time:time, image:image});
// }
// return {relevantInfo: {relevantInfo}, logInUserImage: {logInUserImage}};
}
export default LeftChatItems;