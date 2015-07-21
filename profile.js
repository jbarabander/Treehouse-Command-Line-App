var http = require('http');
var printer = require('./printer.js');

function get(lang){
	var language = lang;

	return function(username){
		//Connect to API URL (http://teamtreehouse.com/username.json)
		var request = http.get('http://teamtreehouse.com/' + username + '.json', function(response){
			var body = ''
			//Read the data
			response.on('data', function(chunk){
				body += chunk;
			});
			response.on('end', function(){
				if(response.statusCode === 200){
					try {
						//Parse the data
						var profile = JSON.parse(body);
						//Print the data out
						var messageHandler = printer.printMessage(lang);
						messageHandler(username, profile.badges.length, profile.points);
					} catch(error) {
						//Parse Error
						printer.printError(error);
					} 
				}
				else {
					//Status Code Error
					printer.printError({message : "There was an error getting a profile for: " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
				}
			});	
		});
		//Connection Error
		request.on('error', printer.printError);
	}
}
	

module.exports.get = get;
