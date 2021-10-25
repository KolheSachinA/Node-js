const geocode = require('./geocode')
const forecast = require('./forecast')
//const address = console.log(process.argv[2]);
const adr = process.argv[2];
const chalk = require('chalk')
if(!adr){
    console.log("Please enter location!");
}else{
    geocode(adr,(error,data)=>{
        if(error){
            return console.log(error);
        }
        // console.log(chalk.red('Error:',error));
        // console.log('Data:',data);
        forecast(data.latitude,data.longitude,(error,forecastData)=>{
            if(error){
               return console.log(error);
            }
            console.log(data.Location);
            console.log(chalk.red(error));
            console.log(chalk.green(forecastData));
        })
    })
}


