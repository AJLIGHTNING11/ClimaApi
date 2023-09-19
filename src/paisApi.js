const axios = require ('axios');


const getCiudad = async(pais)=>{
   await axios.get('https://restcountries.com/v3.1/name/'+pais)
        .then ((result)=>{
            console.log(result.data[0].capital[0]);
            return result.data[0].capital[0];
            });
};

module.exports = {
    getCiudad
}
