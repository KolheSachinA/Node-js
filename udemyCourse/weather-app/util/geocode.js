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
            callback(undefined,{
                Location :response.body.features[0].place_name,
        
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0]
            })
            
        }
    })
}

module.exports = geocode