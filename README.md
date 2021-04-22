# chat_firebase

This is a simple HTML and Javascript template to create a tiny chat program using the realtime database with Google Firebase.

First you have to 
1. Register at Google Firebase
2. Add a new app (which will be a project-id)
3. Go to the realtime database
4. Add a field called <b>chat</b> 
6. Copy the key and project-id
7. Past the key and project-id in the init-firebase.js javascript

From the little form it sends a message to the realtime database. Then, when you do, it immediatly sends back what is stored in the database.
If you host it on your own website (be careful with security) everyone can see the messages. 
