// en 2015 llegan las clases a JS, que es una mejora del objectConstructor

// declaración de clase
class User {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Métodos, funciones especificas para la clase
    mostrarInfo() {
        return `Nombre: ${this.nombre} \nApellido: ${this.apellido}`;
    }
}

const user = new User('Ricky', 'Moreno');
console.log('user', user);
console.log(user.mostrarInfo());

//Herencia

class Cliente extends User {}

const cliente = new Cliente('J', 'J');
console.log('cliente', cliente);
console.log(cliente.mostrarInfo());

class ClienteCuenta extends User {
    constructor(nombre, apellido, saldo) {
        super(nombre, apellido);
        this.saldo = saldo;
    }
}

const cuenta = new ClienteCuenta('Rolling', 'Code', 200000);
console.log('cuenta', cuenta);
console.log(cuenta.mostrarInfo());

//Propiedades privadas (nuevo)

class Usuario {
    #password;
    constructor(nombre, password) {
        // Se usa el _ para indicar que la propiedad no debe ser modificada de forma directa por fuera de la clase.
        this._nombre = nombre;
        // Anteponer el # a la propiedad, es la forma propuesta aún no oficial
        // para declarar propiedades estrictamente privadas.
        // Es decir que que solo pueden ser accedidas y modificadas por los métodos de la clase.
        this.#password = password;
    }

    // Métodos, funciones especificas para la clase
    mostrarInfo() {
        return `Nombre: ${this.nombre}`;
    }

    // Métodos para modificar propiedades del objeto
    cambiarPassword(newPassword) {
        this.#password = newPassword; 
    }
}

const usuario = new Usuario('Javier', 'contraseña');
console.log('usuario.#password', usuario.#password);
console.log('usuario._nombre', usuario._nombre);
