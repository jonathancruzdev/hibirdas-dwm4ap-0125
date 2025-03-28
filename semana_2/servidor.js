const http = require('http');
const port = 3000;
const { ProductManger } = require('./ProductManager.js');
const admin =  new ProductManger(); 

const server = http.createServer( (request, response )=>{
    const url = request.url;
    let body = '';
    let status = 0;
    console.log(url);

    if( url == '/'){
        body = '<h1> Bienvenido </h1>';
        status = 200;
    } else if ( url == '/products'){
        body = '<h1> Lista de Productos </h1>';
        const list = admin.getProducts();
        console.log(list);
        status = 200;
    } else if ( url == '/login') {
        body = '<h1> Login </h1>';
        status = 200;
    } else {
        status= 404;
        body = '<h1> Página no encontrada</h1>';
    }
                        //  application/json
    response.writeHead(status, { 'content-type': 'text/html'} );
    // Body
    response.end(body);
    console.log('Un Cliente conectado...');
} );

server.listen(port, () => {
    console.log(`Servidor web corriendo en el puerto ${port}`);
})

