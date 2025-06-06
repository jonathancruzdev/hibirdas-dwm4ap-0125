import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const dburi = process.env.MONGODB_URI;

const port = process.env.PORT;
const app = express();
import routerAPI from "./routes/index.js"

// Conexion con la DB
mongoose.connect(dburi)
const db = mongoose.connection;

db.on('error', (error) => { console.error( {error} ) } );

db.once('open', () => { console.log('Conexion con la Db Correcta')} );


// middleware
app.use(express.json());

/* app.use( (req, res, next)  =>{
    console.log('Middleware');
    next();
})
 */
app.get('/', (request, response) =>{
    console.log('Ruta Raíz');
    response.send('Home');
})

// Llamamos a nuestras rutas 
routerAPI(app);

app.listen( port, () => {
    console.log(   chalk.green(`Servidor Web en el puerto ${port}`) );    
})


