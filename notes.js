console.log('Starting notes.js');
const fs = require('fs');

let fetchNotes = function() {
	//check if file exists, export if so
	try {
		let notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (error) {
		return [];
	}
};

let saveNotes = function (notes) {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = function(title, body) {
	let notes = fetchNotes();
	let note = {
		title,
		body
	};
	//assign variable to duplicate notes
	let duplicateNotes = notes.filter(function(note) {
		return note.title === title;
	});
	// check for duplicates and write to file
	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	} else {
		return null;
	}
	
};

let getAll = function() {
	let notes = fetchNotes();
	return notes;
};

let getNote = function(title) {
	let notes = fetchNotes();
	let note = notes.filter(function(note) {
		return note.title === title;
	});
	return note[0];

};

let removeNote = function(title) {
	let notes = fetchNotes();
	let filteredNotes = notes.filter(function(note) {
		return note.title !== title;
	});
	saveNotes(filteredNotes);
	if (notes.length !== filteredNotes.length) {
		return true;
	} else {
		return false;
	}
};

module.exports = {
	addNote: addNote,
	getAll: getAll,
	getNote: getNote,
	removeNote: removeNote
};
