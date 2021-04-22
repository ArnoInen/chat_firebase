//Who's the cat that won't cop out when there's danger all about? 
//Chaft!
//Right on
var groupID = 4;
var currentUserID = 17;

//Globals
var dataBaseSocket = database.ref().child('chat').child(groupID);
const chatElement = document.getElementById("chatwindow"); 


function sendMessage(){
	//Get message
	var message = document.getElementById("chatinput").value;

	var currentDate = new Date();
	var jsonDate = currentDate.toJSON();
	
	console.log("chaft.js:sendMessage()" + jsonDate);
	
	// save in database
	database.ref("chat/" + groupID).push().set({
		"date": jsonDate,
		"message": message,
		"userID": currentUserID
	});

	//Scroll to bottom
	chatElement.scrollTop = chatElement.scrollHeight;
}

/*
function moustacheTest(){	
	var data = { name: "Jonathan" };
    var template = document.getElementById("object").innerHTML;
    
    var render = Mustache.render(template, data);        
	document.getElementById("object").innerHTML = render;
}
moustacheTest();
*/


//getting dynamic current value from database.
/*
dataBaseSocket.on('value', function(snapshot) {
	var chatData = snapshot.val();
	var dataKeys = Object.keys(chatData);
	var currentKey = dataKeys[0];
	
	console.log(chatData[currentKey].message + " length:" + dataKeys.length);
	
	var allData = JSON.stringify(snapshot.val(), null, 3);
	console.log("All data: " + allData);		
});*/


//getting new child added.
dataBaseSocket.on('child_added', function(snapshot) {
 
	var messageData = snapshot.val();
	//var value = database.reference().child(groupID).val();
	if(messageData.userID == currentUserID){
		chatElement.innerHTML += "<p class=\"chatmessage chatmessageyou\">" + messageData.message + "</p>"; 
	}else{
		chatElement.innerHTML += "<p class=\"chatmessage chatmessagethey\">" + messageData.message + "</p>"; 
	}	
});

