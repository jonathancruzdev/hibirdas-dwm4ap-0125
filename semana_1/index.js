// importamos el módulo
const Persona = require('./Persona.js');
const { ProductManger } = require('./ProductManager.js');

const persona = {
    nombre: 'Juan',
    apellido: 'Ruiz'
}

/* const nom = persona.nombre;
const ape = persona.apellido;
 */
const { nombre, apellido } = persona;



const p1 = new Persona();
p1.setNombre('Josefina')
let nombrep = p1.getNombre();
console.log( `Hola ${nombre}`);

console.log(ProductManger)