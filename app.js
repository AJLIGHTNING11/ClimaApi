const yargs = require ('yargs');
const paisApi = require('./src/paisApi');
const climaApi = require('./src/climaApi');


yargs.command({
    command: 'getClimaByCountry',
    describe: 'Obten el clima por país',
    builder: {
        pais:{
            describe: 'pais',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        const ciudad = paisApi.getCiudad(argv.pais);
        console.log(climaApi.getClima(ciudad));
    }
})

yargs.parse();