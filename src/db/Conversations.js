let conversations = [
    {users: [{username: "Ofek Koren", nickname: "Ofekkoren", image: "/images/userImages/girl-image.jpg"},
            {username: 'Tomer Eligayev', nickname: 'Tomer-77', image: "/images/userImages/boy-image.png"}],
        messages:[{type:"text", content: "Hello, how are you?", createdAt: '2018-01-01T00:00:00.000Z', sender: "Ofek Koren"},
            {type:"text", content: "I'm fine, thanks", createdAt: '2020-10-10T12:48:00.000Z', sender: "Tomer Eligayev"},
            {type:"text", content: "Have a nice day.", createdAt: '2020-10-10T12:48:00.000Z', sender: "Tomer Eligayev"}]},
    {users: [{username: "Ofek Koren", nickname: "Ofekkoren", image: "/images/userImages/girl-image.jpg"},
            {username: 'Avi Cohen', nickname: 'Avi', image: "/images/userImages/boy-image.png"}],
        messages:[{type:"text", content: "Heyyy, want to eat icecream?", createdAt: '2020-10-10T12:48:00.000Z', sender: "Avi Cohen"},
            {type:"text", content: "I'm fine, thanks", createdAt: '2020-10-10T12:48:00.000Z', sender: "Ofek Koren"},
            {type:"text", content: "Do I know you?", createdAt: '2020-10-10T12:48:00.000Z', sender: "Ofek Koren"},
            {type:"text", content: "No, but we can :)", createdAt: '2020-10-10T12:48:00.000Z', sender: "Avi Cohen"}]},
    {users: [{username: 'Tomer Eligayev', nickname: 'Tomer-77', image: "/images/userImages/boy-image.png"},
            {username: 'Moti Luhim', nickname: 'Moti Luhim', image: "/images/userImages/boy-image.png"}],
        messages:[{type:"text", content: "You have a funny name!", createdAt: '2020-10-10T12:48:00.000Z', sender: "Tomer Eligayev"},
            {type:"text", content: "I know, my parents don't like me :(", createdAt: '2020-10-10T12:48:00.000Z', sender: "Moti Luhim"},
            {type:"text", content: "Do you know you Misha Al?", createdAt: '2020-10-10T12:48:00.000Z', sender: "Tomer Eligayev"}]},
    {users: [{username: 'Avi Cohen', nickname: 'Avi', image: "/images/userImages/boy-image.png"},
            {username: 'Tomer Eligayev', nickname: 'Tomer-77', image: "/images/userImages/boy-image.png"}],
        messages:[{type:"text", content: "Have you ever seen a picture of my cat?", createdAt: '2020-10-10T12:48:00.000Z', sender: "Avi Cohen"},
            {type:"text", content: "no...", createdAt: '2020-10-10T12:48:00.000Z', sender: "Tomer Eligayev"},
            {type:"image", content: "/mediaMessages/mediaImages/avisCatImage.jpg", createdAt: '2020-10-10T12:48:00.000Z', sender: "Avi Cohen"},
            {type:"text", content: "Excuse me but who are you??", createdAt: '2020-10-10T12:48:00.000Z', sender: "Tomer Eligayev"}
        ]}

]

export default conversations;