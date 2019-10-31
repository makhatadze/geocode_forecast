const request = require('request')
 

const forecast = (latitude,longitude,callback)=>{
    const url = 'https://api.darksky.net/forecast/848eda48cec57b479d8a6ab1d875e306/' + latitude  +',' + longitude
   
    request({url: url,json:true},(error,response) => {
        if(error){
            callback("Unable to establish connection ")
        }else if(response.body.error){
            callback(response.body.error)
        }else{
            callback(undefined, response.body.daily.data[0].summary + "It is " + response.body.currently.temperature + " degrees out. There is " +response.body.currently.precipProbability+ "%" + " chances of rainfall.")
        }
    }) 
}

module.exports = forecast