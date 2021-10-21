const { demandOption } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js')
yargs.command({
    command: 'add',
    describe: 'Adding Notes!',
    builder: {
        title: {
            describe: 'Titles',
            demandOption: true,
            type: 'String'
        },
        body: {
            describe: 'Body',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv) {
        // console.log(`The title is ${argv.title}`);
        // console.log(`The body is ${argv.body}`);
        notes.addNotes(argv.title,argv.body);
    }
});

yargs.command({
    command: 'Remove',
    describe: 'Notes will be removed!',
    builder: {
        title: {
            describe:'title',
            demandOption:true,
            type:'String'
        },
        body: {
                describe:'body',
                demandOption:false,
                type:'String'
        }
    },
    handler(argv) {
        //console.log(`${argv.title} will be removed`);
        notes.removeNotes(argv.title)
        
    }
}),
yargs.command({
        command:'List',
        describe:'List Of all',
        builder:{
            

        },
        handler(argv){
            notes.ShowList();
        }
}),
yargs.command({
    command:'Read',
    describe:'Read content',
    builder:{
            title:{
                describe:'title',
                demandOption:true,
                type:'String' 
            },
            body:{

            }
    },
    handler(argv){
        notes.ReadList(argv.title)
    }

})
yargs.parse();