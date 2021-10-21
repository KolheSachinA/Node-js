const fs = require('fs');
const chalk = require('chalk');
const getNotes = ()=> {
    return 'Your notes..'
}
const addNotes = (title, body)=> {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note)=>{
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
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
const loadNotes = ()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const removeNotes =(title)=>{
    const notes = loadNotes();
    const NonmatchingNote = notes.filter((note)=> {
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

const ShowList = () =>{
    const notes = loadNotes()
    console.log(chalk.green('Your notes are:'))
    notes.forEach((note) => {
            console.log(note.title);
    })
}

const ReadList =(title)=>{
    const notes = loadNotes()
    const matchingLog = notes.find((note)=> note.title === title     
    )
    if(matchingLog===undefined){
        console.log(chalk.red('No note found!'));
    }
    else{
        //console.log(matchingLog);
        console.log(chalk.green(matchingLog.title));
        console.log(matchingLog.body);
    }
}
module.exports = {
    removeNotes: removeNotes,
    addNotes: addNotes,
    ShowList:ShowList,
    ReadList:ReadList
}