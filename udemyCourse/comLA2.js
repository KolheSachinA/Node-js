const yargs = require('yargs');
//console.log(process.argv);
//console.log(yargs.argv);
//Customize version
//yargs.version('1.2.0');
//Create add command.
yargs.command({
    command:'add',
    describe:'Adding new note!',
    handler:function (){
        console.log("Added new Note");
    }
});
yargs.command({
    command:'remove',
    describe:'Removing notes!',
    handler:function(){
        console.log("Removed notes!");
    }
})
yargs.command({
    command:'read',
    describe:'Read Note',
    showInHelp:true,
    builder:{
            title:{
                describe:'Note title',
                demandOption:true,
                type:'string'
            },
            body:{
                describe:'Notes2',
                demandOption : true,
                type : 'string'
            }
    },
    handler:function(argv){
        console.log(`Titles:${argv.title}`);
        console.log(`Body:${argv.body}`);
    }
})
yargs.command({
    command:'List',
    describe:'content Listed',
    showInHelp:true,
    handler:function(){
        console.log('Content is listed!')

    }
})
//console.log(yargs.argv);
yargs.parse();