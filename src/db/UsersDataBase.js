import conversations from '../db/Conversations';

let users = [{username: 'Ofek Koren', nickname: 'Ofekkoren', password: '123456K', image: "/images/userImages/girl-image.jpg", chats:[conversations[0], conversations[1]]},
{username: 'Tomer Eligayev', nickname: 'Tomer-77', password: '123456E', image: "/images/userImages/boy-image.png", chats:[conversations[0], conversations[2], conversations[3]]},
{username: 'Avi Cohen', nickname: 'Avi', password: '123456C', image: "/images/userImages/boy-image.png", chats: [conversations[1],conversations[3]]},
{username: 'Shir Levi', nickname: 'Shirus', password: '123456L', image: "/images/userImages/girl-image.jpg", chats: [conversations[4]]},
{username: 'Moti Luhim', nickname: 'Moti Luhim', password: '123456L', image: "/images/userImages/boy-image.png", chats:[conversations[4],conversations[2]]}];

export default users;