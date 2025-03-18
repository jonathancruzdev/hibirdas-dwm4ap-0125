class Persona {
    // Atributos
    nombre = '';
    apellido = '';
    edad = 0;
    // Métodos
    getNombre = function(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    getEdad(){
        return this.edad;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
}

// Exportamos la clase
module.exports = Persona