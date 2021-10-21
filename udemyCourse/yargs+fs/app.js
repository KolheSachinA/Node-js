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
    handler: function (argv) {
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
    handler: function (argv) {
        //console.log(`${argv.title} will be removed`);
        notes.removeNotes(argv.title)
    }
})
yargs.parse();