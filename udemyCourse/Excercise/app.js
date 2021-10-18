const getNotes = require('./notes.js');
const chalk = require('chalk');
const validator = require('validator')
const note = getNotes();
console.log(note);
console.log(validator.isEmail('sachin@gmail.com'));
console.log(validator.isEmail('sachingmail.com'));
console.log(validator.isURL('http://www.sachin.com'));
console.log(validator.isURL('http:/www.sachin.com'));
console.log(chalk.blue('THis is blue'));
console.log(chalk.blue.bgRed.bold('Hello world!'));

