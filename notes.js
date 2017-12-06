console.log('Starting notes.js');

let addNote = function(title, body) {
	console.log('Adding note', title, body)
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
