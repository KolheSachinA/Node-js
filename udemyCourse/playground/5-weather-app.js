const chalk = require('chalk')
const request = require('request')
const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiZGVtb25mb3gtbm90YXZhaWxhYmxlIiwiYSI6ImNrdjJhbHZldzA4ZTkydnAxMHo4NDVvOGYifQ.s49in1sv2eZVLB_0ssHfWA&limit=1'

    request({url:url, json:true},(error,response) =>{
        if(error){
            callback('Unable to connect to weather forecast!',undefined)
        }else if(response.body.features.length === 0){
            callback('Unble to find location!',undefined)
        }else{
            
        }
    })
}

geocode('INDIA',(error,data)=>{
        console.log(chalk.red('Error',error));
        console.log(chalk.green('Data',data));
})