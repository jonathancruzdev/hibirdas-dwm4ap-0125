import express from "express";
import chalk from "chalk";
const port = 5000;
const app = express();
import routerAPI from "./routes/index.js"

// middleware
app.use(express.json());

app.get('/', (request, response) =>{
    console.log('Ruta Raíz');
    response.send('Home');
})

// Llamamos a nuestras rutas 
routerAPI(app);

app.listen( port, () => {
    console.log(   chalk.green(`Servidor Web en el puerto ${port}`) );    
})


