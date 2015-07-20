//Problem: We need a simple way to grab badges user's badge count and Javascript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

var http = require('http');
var username = "jbarabander"

function printMessage(username, badgeCount, points){
  var message = username + ' has ' + badgeCount + ' total badge(s) and ' + points + ' points in Javascript';
  console.log(message);
}


//Connect to API URL (http://teamtreehouse.com/username.json)
var request = http.get('http://teamtreehouse.com/' + username + '.json', function(response){
	var body = ''
	//Read the data
	response.on('data', function(chunk){
		body += chunk;
	});
	response.on('end', function(){
		console.log(body);
		console.log(typeof body);
	})
	//Parse the data
	//Print the data out
})


request.on('error', function(error){
	console.error(error.message);	
});
