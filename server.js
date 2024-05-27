const Hapi = require('@hapi/hapi');
const Routes = require('./routes')

const init = async () =>{
    const server = Hapi.server({
        port : 7000,
        host : 'localhost'
    })
    server.route(Routes)
    await server.start();
    console.log(`server berjalan pada ${server.info.uri}`);
}
init();


