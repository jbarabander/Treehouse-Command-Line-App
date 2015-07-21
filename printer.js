//Print out message
function printMessage(lang){
	var language = lang || "JavaScript";
	return function(username, badgeCount, pointsObj){
		if(typeof pointsObj[language] === 'undefined'){
			printError({message : "There is no programming language called " + language + " \n (make sure the language name is properly capitalized)"});
		}
		else {
			console.log(username + ' has a total of ' + badgeCount + ' badge(s) and ' + pointsObj[language] + ' points in ' + language);
		}
		
	}
}

//Print out error
function printError(error){
	console.error(error.message);
}

module.exports.printMessage = printMessage;
module.exports.printError = printError;