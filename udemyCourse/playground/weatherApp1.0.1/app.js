const request = require('request');
const url = 'http://api.weatherstack.com/current?access_key=da83180f9ff0edad5216e1f38d08ee04&query=55.751244,37.618423'

request({url,json : true} , (error, result) => {
    const data = (result.body);
    console.log(data.current.weather_icons);
})