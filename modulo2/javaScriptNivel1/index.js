// console.log('hola mundo');

// con console.log() una función para mostrar mensajes o datos en la consola del navegador.

// console.log(); alert(); prompt(); confirm(); son funciones definidas en el navegador que podemos utilizar.


let variable; // esta es la declaración de una variable

variable = 'este es el valor de la variable'; // operación de asignación de un valor a una variable.

let otraVariable = ', y este es otro string';  // declaración y la asignación de una variable. Un dato de tipo string.

let numero = 1000; // dato de tipo number

let resultado = numero / 10; // primero se ejecuta la división y por último se asigna el resultado a la variable.

// console.log('Resultado: ' + resultado); // primero se concatenan los valores y el resultado es mostrado en consola.



function mostrarHola() { // esta es la declaración de una función.
    // entre las llaves escribimos el código que se ejecutará cuando sea llamada esta función.
    console.log('hola si');
}

mostrarHola(); // y esta es la llamada a una función, el código dentro de la función se ejecuta solo cuando esta es llamada.



function mostrarTexto(texto1, texto2) { // las funciones pueden recibir parámetros al ser llamadas y usar estos datos en su ejecución.
    // dentro de la función podemos usar las variables texto1 y texto2.
    console.log(texto1, texto2);
}

mostrarTexto('primer mensaje', 'segundo mensaje'); // la llamada a la función, con sus parámetros.



let entero = parseInt('200'); // una función incluida en JS, recibe un dato de tipo string y retorna un número entero decimal.

function multiplicarPorDos(num) {
    let resultado = parseInt(num) * 2;
    return resultado; // con return las funciones pueden retornar un valor al ser llamadas, también sirve para indicar o forzar el final de una función.
    console.log(resultado); // este código no se ejecutara, porque la función retornó en la linea anterior.
}

let producto = multiplicarPorDos(10);

console.log(producto);



let numeroIngresado = prompt('ingrese un número'); // la función prompt recibe un string para el mensaje a mostrar, y retorna un string con el dato ingresado por el usuario. 

let producto2 = multiplicarPorDos(numeroIngresado); // al llamar a una función, podemos indicar en el parámetro: un valor, una variable(como en este caso) o el valor que retorne otra función.

console.log(producto2);

// las funciones son declaradas una vez y pueden ser llamadas cualquier cantidad de veces.

// let producto = multiplicarPorDos(prompt('ingrese un número')); // una función que recibe el retorno de otra función como parámetro.



document.write(producto2); // esta función incluida en el navegador nos permite escribir en el documento html.


