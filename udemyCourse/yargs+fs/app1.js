const yargs = require('yargs');
const Details = require('./notes1.js')
yargs.command ({
    command:'Add',
    describe:'record is added!',
    builder:{
        Username:{
                describe:'Username',
                demandOption:true,
                type:'String'
        },
        Password:{
                describe:'Password',
                demandOption:true,
                type:'String'
        }
    },
    handler:function(argv) {
      // console.log(`The username is ${argv.Username}`);
       // console.log(`The password is ${argv.Password}`);
        //console.log("added!");
        Details.addDetails(argv.Username,argv.Password);
    }
});


yargs.parse()