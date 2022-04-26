# Advanced Programming exercise 1:
submitting:
Tomer Eligayev, id: 208668129
Ofek Koren, id: 207105933
					

## **Explanation:**

Our program is a communication website, called ">>>>>>" which allows users that are signed to communicate one with another on our website.

**Log-in screen:**
First, a log-in form is presented to the user asking for the user to log-in.
 - If the user has signed-up before, he fills his username and his password,  clicks on the "log-in" button and the chat screen is presented to him, enabling the user to continue chatting with his friends.
 - If the user hasn't signed-up before, he needs to click on the link to sign-up, which present him our second screen, the sign-up screen. 

**Sign-up screen:**
In this form the user is asked to fill few details: the username he wants to have, which will be his id on the web. Therefore the user must find username which doesn't already appears in the system (taken by other sign-up user).
Moreover, the user is asked to pick a nickname and a password (and repeat it), and has the option to choose a profile image (but it is not required). In case that the user hasn't chose a profile image, a default profile image will be showed.
The password must contain at least 6 characters and must contain at least one character and one letter.
If all the fields have filled rightly then the user's chat screen is presented to the user.

**Chat screen:**
The user will see his nickname and his profile picture on the top-left line.
- If the user has just registered, an empty window of chats will show up with the option to add a new chat with one of the signed-in users.
- If the user has signed-in, he will see all of the chats he was having before on the left and have the same option to add a new chat with one of the signed-in users.

In both cases, the user can see on the left all of the chats he is having, each chat holds the following information: the contact's nickname and profile image, the last message sent or received in the conversation the two where having (if there are any messages in the chat) and the time it was sent.
When clicking on one of the chats in the left screen, a conversation with the contact appears on the right screen (or an empty chat if it is a new conversation with the user). The user sees all of the messages in the conversation and is able to write a text message to his contact in the input text box, or to attach a picture (types>>.....>?), a video (types......?) and a voice message.
