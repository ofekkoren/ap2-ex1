﻿# Advanced Programming exercise 1:
Submitting:

Tomer Eligayev, id: 208668129

Ofek Koren, id: 207105933

## **Running the project**	
- The project was developed with React framework.
The only npm library that was installed in this project was React-Router-v6.
- You can download the project using the command `git clone https://github.com/ofekkoren/ap2-ex1.git`
- To run the project you can run the `npm start` command. This will open the chat application on http://localhost:3000 to view in your browser.				
- **There are 5 initial users signed-up to the chat. Their user names are: Ofek Koren, Tomer Eligayev, Avi Cohen, Shir Levi, and Moti Luhim. The password of each one of them is "123456" followed by the first letter of their last name (in upper case).** 
- For example: the password of the user "Avi Cohen" is "123456C".
- **To view a conversation with all the possible messages (text, video, image, audio) you can look at the conversation between Avi Cohen (Avi) and Tomer Eligayev (Tomer-77).**	

## **Explanation**
Our program is a chat website, called "Best Web Chat!" which allows registered users to communicate with each other on our website.

**Log-in screen:**
First, a log-in form is presented to the user asking for the user to log in.
 - If the user has signed up before, he fills his username and his password,  clicks on the "log-in" button and the chat screen is presented to him, enabling the user to continue chatting with his friends.
 - If the user hasn't signed up before, he needs to click on the link to sign up, which presents him our second screen, the sign-up screen. 

In this form, the user is asked to fill a few details: First, the username he wants to have. The username will be his id in the chat system. Therefore the user must find a username that isn't taken already by another signed-up user.
Moreover, the user is asked to pick a nickname and a password (and repeat it), and has the option to choose a profile image (but it is not required). In case the user hasn't chosen a profile image, a default profile image will be shown.
The password must contain at least 6 characters and must contain at least one character and one letter.
If all the fields have been filled correctly then the user's chat screen is presented to the user.


**Chat screen:**
The user will see his nickname and his profile picture on the top-left line.
- If the user has just registered, an empty window of chats will show up with the option to add a new chat with one of the signed-in users.
- If the user has signed in, he will see all of the chats he was having before on the left and have the same option to add a new chat with one of the signed-in users.

In both cases, the user can see on the left all of the chats he is having, each chat holds the following information: the contact's nickname and profile image, the last message sent or received in the conversation the two where having (if there are any messages in the chat) and the time it was sent.
When clicking on one of the chats on the left screen, a conversation with the contact appears on the right screen (or an empty chat if it is a new conversation with the user). The user sees all of the messages in the conversation and is able to write a text message to his contact in the input text box, or to attach an image, a video and a voice message.

