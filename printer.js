//Print out message
function printMessage(username, badgeCount, points){
  var message = username + ' has a total of ' + badgeCount + ' badge(s) and ' + points + ' points in Javascript';
  console.log(message);
}

//Print out error
function printError(error){
	console.error(error.message);
}

module.exports.printMessage = printMessage;
module.exports.printError = printError;