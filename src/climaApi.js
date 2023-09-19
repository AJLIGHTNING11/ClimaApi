const axios = require ('axios');

const getClima = async(ciudad)=>{
    console.log(ciudad);
    await axios.get('http://api.weatherstack.com/current?access_key=0b6a9c66cd01d1570ab443d91e633557&query='+ciudad)
         .then ((result)=>{
             console.log(result.data);
             return result.data;
             });
 };
 
 module.exports = {
     getClima
 }