import conversations from '../db/Conversations';

let users = [{username: 'Ofek Koren', nickname: 'Ofekkoren', password: '123456K', Image: "/images/userImages/girl-image.jpg", chats:[conversations[0], conversations[1]]},
{username: 'Tomer Eligayev', nickname: 'Tomer-77', password: '123456E', Image: "/images/userImages/boy-image.png", chats:[conversations[0], conversations[2]]},
{username: 'Avi Cohen', nickname: 'Avi', password: '123456C', Image: "/images/userImages/boy-image.png", chats: [conversations[1]]},
{username: 'Shir Levi', nickname: 'Shirus', password: '123456L', Image: "/images/userImages/girl-image.png", chats:[]},
{username: 'Moti Luhim', nickname: 'Motka', password: '123456L', Image: "/images/userImages/boy-image.png", chats:[conversations[2]]}];

export default users;