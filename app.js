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
let command = process.argv[2];
console.log(`Command: ${command}`);
console.log('Yarg', argv);

if (command === 'add') {
	console.log('Adding new note');
	notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.getNote(argv.title);
} else if (command === 'remove') {
	notes.removeNote(argv.title);
} else {
	console.log('Command not recognized');
}

