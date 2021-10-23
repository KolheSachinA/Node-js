const geocode = require('./geocode')
const forecast = require('./forecast')
const chalk = require('chalk')
geocode('indiana',(error,data)=>{
    console.log(chalk.red('Error:',error));
    console.log('Data:',data);
})

forecast(18.5195700,73.8553500,(error,data)=>{
    console.log(chalk.red(error));
    console.log(chalk.green(data));
})