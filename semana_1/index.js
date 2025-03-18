// importamos el módulo
const Persona = require('./Persona.js');

const p1 = new Persona();
p1.setNombre('Josefina')
let nombre = p1.getNombre();
console.log( `Hola ${nombre}`);