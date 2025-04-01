import chalk from "chalk";
import express from "express";
//import { ProductManger } from "./ProductManager.js";
import ProductManger from "./ProductManager.js";


const port = 5000;
const app = express();
const admin = new ProductManger();


app.get('/', (request, response) =>{

    console.log('Ruta Raíz');
    response.send('Home');
})

app.get('/products', (requets, response ) => {
    const lista = [ { id: 1, name:'Mouse', price: 23000} ];
    response.json( lista );
})


app.post('/products', (request, response) =>{
    console.log('POST');
    response.json({ id: 2});
})


app.listen( port, () => {
    console.log(   chalk.green(`Servidor Web en el puerto ${port}`)  );    
})



