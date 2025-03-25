// importamos el módulo

const { ProductManger } = require('./ProductManager.js');

// Generar ids Random
let id = crypto.randomUUID();
const admin =  new ProductManger();

admin.addProduct({id, name: 'Celular Motorola', price: 2344})

id = crypto.randomUUID();
admin.addProduct({id, name: 'Mouse', price: 400})





console.log(ProductManger)