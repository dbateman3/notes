/* let obj = {
	name: 'Dan'
};

let stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

let personString = '{"name":"Dan", "Age": 25}';	
let person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
*/

const fs = require('fs');

let originalNote = {
	title: 'Some title',
	body: 'Some body'
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.js', originalNoteString);

let noteString = fs.readFileSync('notes.js');
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);