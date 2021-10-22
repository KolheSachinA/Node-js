const chalk = require('chalk')
const request = require('request')
//const url = 'https://api.weatherstack.com/current?access_key=da83180f9ff0edad5216e1f38d08ee04&query=&units=f'
const url = 'http://api.weatherstack.com/current?access_key=da83180f9ff0edad5216e1f38d08ee04&query=18.5195700,73.8553500&units=f'

request({ url: url, json: true }, (error, response) => {
   if (error) {
      console.log(chalk.red("Unable to connect!"));

   } else if (response.body.error) {
      console.log(chalk.red("Unable to find Location!"));

   } else {
      // const data = JSON.parse(response.body)
      // console.log(data.current);
      //console.log(response.body.location.timezone_id);
      const feelslike = response.body.current.weather_descriptions
      const temperature = response.body.current.temperature
      console.log(`It is currently ${temperature} degree out and its ${feelslike} outside`);
   }

})
