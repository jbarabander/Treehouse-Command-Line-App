//Problem: We need a simple way to grab badges user's badge count and Javascript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var profile = require('./profile.js')
var programLang = process.argv[2];
var users = process.argv.slice(3);
var get = profile.get(programLang);

users.forEach(get);