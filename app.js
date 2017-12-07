//Require a built in module
const fs = require('fs');
//Require a local file
const notes = require('./notes.js');
//Require a third party module
const _ = require('lodash');
const yargs = require('yargs');
//Collect arguments from console
let titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};
let bodyOptions = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
}
const argv = yargs
	.command('add', 'Add a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note', {
		title: titleOptions
	})
	.command('remove', 'Remove a note', {
		title: titleOptions
	})
	.help()
	.argv;
let command = argv._[0];


if (command === 'add') {
	let note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log(`Note successfully created!`);
		notes.logNote(note);
	} else{
		console.log(`Error! Title ${argv.title} already exists!`);
	}
} else if (command === 'list') {
	let allNotes = notes.getAll();
	allNotes.forEach((note) => {
		console.log(notes.logNote(note));
	});
} else if (command === 'read') {
	let note = notes.getNote(argv.title);
	if (note) {
		console.log('Note found!');
		notes.logNote(note);
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

