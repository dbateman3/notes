console.log('Starting app');
//Require a built in module
const fs = require('fs');
const os = require('os');
//Require a local file
const notes = require('./notes.js');
/*
let user = os.userInfo();


fs.appendFile('greetings.txt', `Hello ${user.username}`, function(err) {
	if(err) {
		console.log('Unable to write to file');
	}
});
*/
let result = notes.addNote();
console.log(result);