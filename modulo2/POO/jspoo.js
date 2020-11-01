// en 2015 llegan las clases a JS, que es una mejora del objectConstructor

// declaracion de clase
class User {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
    }

    // Metodos, funciones especificas para la clase
    mostrarInfo() {
        return `Nombre: ${this.nombre} \nApellido: ${this.apellido}`
    }

}

const user = new User("Ricky", "Moreno")
console.log("user", user)
console.log(user.mostrarInfo());

//Herencia

class Cliente extends User {
}

const cliente = new Cliente("J", "J")
console.log("cliente", cliente)
console.log(cliente.mostrarInfo());

class ClienteCuenta extends User {
    constructor(nombre, apellido, saldo) {
        super(nombre, apellido)
        this.saldo = saldo
    }
}

const cuenta = new ClienteCuenta("Rolling", "Code", 200000)
console.log("cuenta", cuenta)
console.log(cuenta.mostrarInfo());

//Propiedades privadas (nuevo)

class Usuario {
    constructor(nombre, password) {
        this.nombre = nombre
        this.password = password
    }

    // Metodos, funciones especificas para la clase
    mostrarInfo() {
        return `Nombre: ${this.nombre} \nApellido: ${this.apellido}`
    }

}