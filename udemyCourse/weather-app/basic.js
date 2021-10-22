const chalk = require('chalk')
//asynchronous.
console.log(chalk.green("Start of program"));

setTimeout(()=>{
    console.log('Run after 2 sec');
},2000)

setTimeout(()=>{
console.log('Run after 0 sec.');
},0)
console.log(chalk.red("End of program"));