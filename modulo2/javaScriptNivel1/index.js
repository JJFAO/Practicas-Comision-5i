
let variable; // esta es la declaración de una variable

variable = 'este es el valor de la variable'; // operación de asignación de un valor a una variable.

let otraVariable = ', y este es otro string';  // declaración y la asignación de una variable. Un dato de tipo string.

let numero = 1000; // dato de tipo number

let resultado = numero / 10; // operación aritmética
// alert('Resultado: ' + resultado);


function mostrarHola() { // esta es la declaración de una función.
    console.log('hola si');
}

mostrarHola(); // el código dentro de la función se ejecuta solo cuando esta es llamada.


function mostrarTexto(texto1, texto2) { // las funciones pueden recibir parámetros al ser llamadas y usar estos datos en su ejecución.
    console.log(texto1, texto2);
}

mostrarTexto('primer mensaje', 'segundo mensaje');


function multiplicarPorDos(num) {
    let resultado = parseInt(num) * 2;
    return resultado; // las funciones pueden retornar un valor al ser llamados, return también sirve para indicar o forzar el final de una función.
}

let producto = multiplicarPorDos(10);
console.log(producto);


let entero = parseInt('200'); // una función incluida en JS, recibe un dato de tipo string y retorna un número entero decimal.

// console.log('hola mundo');
// alert('esto es una alerta')
// console.log(); alert(); prompt(); confirm(); son funciones definidas en el navegador que podemos utilizar.


let numeroIngresado = prompt('ingrese un número'); // la función prompt retorna un string con el dato ingresado por el usuario. 

let producto2 = multiplicarPorDos(numeroIngresado); // al llamar a una función, podemos indicar en el parámetro: un valor, una variable o el valor que retorne otra función

// let producto = multiplicarPorDos(prompt('ingrese un número')); // una función que recibe el retorno de otra función como parámetro.

console.log(producto2);

document.write(producto2); // esta función del navegador nos permite escribir en el documento html.


