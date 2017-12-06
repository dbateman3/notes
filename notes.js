console.log('Starting notes.js');
const fs = require('fs');

let addNote = function(title, body) {
	let notes = [];
	let note = {
		title,
		body
	};

	try {
		let notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString);
	} catch (error) {

	}

	let duplicateNotes = notes.filter(function(note) {
		return note.title === title;
	});

	if (duplicateNotes.length === 0) {
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));
	}
	
};

let getAll = function() {
	console.log(`Getting notes`);
};

let getNote = function(title) {
	console.log(`Getting ${title} note`);
};

let removeNote = function(title) {
	console.log(`Removing ${title} note`);
};

module.exports = {
	addNote: addNote,
	getAll: getAll,
	getNote: getNote,
	removeNote: removeNote
};
