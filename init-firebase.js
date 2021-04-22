//Resources 
// - http://adnan-tech.com/tutorial/realtime-web-based-chat-in-firebase

var firebaseConfig = {
	apiKey: "KEY",
	authDomain: "project-id.firebaseapp.com",
	databaseURL: "https://[huppeldepup].firebaseio.com",
	projectId: "[huppeldepup]",
	storageBucket: "[huppeldepup].appspot.com",
};

// Initialize Firebase with a "default" Firebase project
firebase.initializeApp(firebaseConfig);

//Firing up the database
var database = firebase.database();



