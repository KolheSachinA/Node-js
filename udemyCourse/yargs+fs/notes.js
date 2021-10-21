const fs = require('fs');
const chalk = require('chalk');
const getNotes = function () {
    return 'Your notes..'
}
const addNotes = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green("Notes added"));
    }
    else {
        console.log(chalk.red('Note already exist!'));
    }

}
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const removeNotes = function (title) {
    const notes = loadNotes();
    const NonmatchingNote = notes.filter(function (note) {
        return note.title !== title;
    })

    if(notes.length > NonmatchingNote.length){
        console.log(chalk.green('Note is removed!'));
        saveNotes(NonmatchingNote);
    }else{
        console.log(chalk.red('Note not removed!'));
    }

    // if (NonmatchingNote.length == 0) {//not printing?
    //     console.log("No element found!");

    // } else {
    //     saveNotes(NonmatchingNote);
    // }


    //console.log("Note is removed!");
}
module.exports = {
    removeNotes: removeNotes,
    addNotes: addNotes
}