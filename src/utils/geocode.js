const request = require('request')

//Geocoding-----

const geocode = (address,callback)=>{
    //encodeURIComponent can be used with address else only address itself
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaWFtc2FudHkiLCJhIjoiY2p6Z3hzajJnMHFtODNsandyOXZjOW4zMyJ9.EO18TP8AyK1kdVw2kZUM6Q'
   
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("unable to establish connection",undefined)
        }
        else if(response.body.features.length === 0){
            callback("unable to locate",undefined)
        }
        else{
            callback(undefined,{
                longitude : response.body.features[0].center[0],
                latitude : response.body.features[0].center[1],
                location : response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode