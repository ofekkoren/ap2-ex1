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
            {type:"text", content: "Do you know you Misha Al?", createdAt: '2020-10-10T12:48:00.000Z', sender: "Tomer Eligayev"},
            {type:"audio", content: "/mediaMessages/CricketsAudio.mp3", createdAt: '2020-10-10T12:48:00.000Z', sender: "Moti Luhim"},
        ]},
    {users: [{username: 'Avi Cohen', nickname: 'Avi', image: "/images/userImages/boy-image.png"},
            {username: 'Tomer Eligayev', nickname: 'Tomer-77', image: "/images/userImages/boy-image.png"}],
        messages:[{type:"text", content: "Have you ever seen a picture of my cat?", createdAt: '2020-10-10T12:48:00.000Z', sender: "Avi Cohen"},
            {type:"text", content: "no...", createdAt: '2020-10-10T12:48:00.000Z', sender: "Tomer Eligayev"},
            {type:"image", content: "/mediaMessages/avisCatImage.jpg", createdAt: '2020-10-10T12:48:00.000Z', sender: "Avi Cohen"},
            {type:"text", content: "Have you ever heard my cat?", createdAt: '2020-10-10T12:48:00.000Z', sender: "Avi Cohen"},
            {type:"text", content: "no.....", createdAt: '2020-10-10T12:48:00.000Z', sender: "Tomer Eligayev"},
            {type:"audio", content: "/mediaMessages/avisCatSound.mp3", createdAt: '2020-10-10T12:48:00.000Z', sender: "Avi Cohen"},
            {type:"text", content: "Have you ever seen a video of my cat?", createdAt: '2020-10-10T12:48:00.000Z', sender: "Avi Cohen"},
            {type:"text", content: "no.................", createdAt: '2020-10-10T12:48:00.000Z', sender: "Tomer Eligayev"},
            {type:"video", content: "/mediaMessages/avisCatVideo.mp4", createdAt: '2020-10-10T12:48:00.000Z', sender: "Avi Cohen"},
            {type:"text", content: "He is a scaredy cat :)", createdAt: '2020-10-10T12:48:00.000Z', sender: "Avi Cohen"},
            {type:"text", content: "Excuse me but who are you??", createdAt: '2020-10-10T12:48:00.000Z', sender: "Tomer Eligayev"}
        ]},
    {users: [{username: 'Moti Luhim', nickname: 'Moti Luhim', image: "/images/userImages/boy-image.png"},
            {username: 'Shir Levi', nickname: 'Shirus', image: "/images/userImages/girl-image.jpg"}],
        messages:[{type:"text", content: "Have you heard the news about Simha Tzil?", createdAt: '2022-04-10T12:48:00.000Z', sender: "Moti Luhim"},
            {type:"text", content: "No, what happened?", createdAt: '2022-04-10T12:48:00.000Z', sender: "Shir Levi"},
            {type:"text", content: "Elon Musk bought his eggplant fuel company for 44 billion dollars!", createdAt: '2022-04-10T12:48:00.000Z', sender: "Moti Luhim"},
            {type:"text", content: "what ???", createdAt: '2022-04-10T12:48:00.000Z', sender: "Shir Levi"},
            {type:"text", content: "Yess , apparently fuel made of eggplants makes a great spaceships fuel", createdAt: '2022-04-10T12:48:00.000Z', sender: "Moti Luhim"},
            {type:"text", content: "wowww this is unbelievable!", createdAt: '2022-04-10T12:48:00.000Z', sender: "Shir Levi"},
            {type:"image", content: "/mediaMessages//spaceEggplantImage.png", createdAt: '2022-04-10T12:48:00.000Z', sender: "Moti Luhim"},



        ]}
]

export default conversations;