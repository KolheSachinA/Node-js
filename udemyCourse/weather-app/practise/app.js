const chalk = require('chalk')
const request = require('request');
//const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/121aaa.json?access_token=pk.eyJ1IjoiZGVtb25mb3gtbm90YXZhaWxhYmxlIiwiYSI6ImNrdjJhbHZldzA4ZTkydnAxMHo4NDVvOGYifQ.s49in1sv2eZVLB_0ssHfWA&limit=1'
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGVtb25mb3gtbm90YXZhaWxhYmxlIiwiYSI6ImNrdjJhbHZldzA4ZTkydnAxMHo4NDVvOGYifQ.s49in1sv2eZVLB_0ssHfWA&limit=1'
request({url : url,json : true},(error,response) =>{
    if(error){
        console.log(chalk.red("Unable to connect to weather forecast!"));
    }
        else if(response.body.features.length === 0){
                console.log(chalk.red("Unble to find location!"));
        
    }else{
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]//Not understand.
        console.log(`latitude:${latitude}`);
        console.log(`longitude:${longitude}`);
      //console.log(response.body.features[0].center);
      //console.log(response.body.features);
        
    
       
    }
   
    
   
})
