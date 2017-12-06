console.log('Starting app');
//Require a built in module
const fs = require('fs');
//Require a local file
const notes = require('./notes.js');
//Require a third party module
const _ = require('lodash');
const yargs = require('yargs');
//Collect arguments from console
const argv = yargs.argv;
let command = argv._[0];
console.log(`Command: ${command}`);
console.log('Yarg', argv);

if (command === 'add') {
	let note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log(`Note successfully created!`);
		console.log('__');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
	} else{
		console.log(`Error! Title ${argv.title} already exists!`);
	}
} else if (command === 'list') {
	let allNotes = notes.getAll();
	allNotes.forEach(function(note) {
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
		console.log('__')
	})
} else if (command === 'read') {
	let note = notes.getNote(argv.title);
	if (note) {
		console.log('Note found!');
		console.log('__');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
	} else {
		console.log('Note not found');
	}
} else if (command === 'remove') {
	let noteRemoved = notes.removeNote(argv.title);
	let message = noteRemoved ? 'Note was removed' : 'Note doesnt exist';
	console.log(message);
} else {
	console.log('Command not recognized');
}

