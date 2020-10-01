
// Un uso que le daremos a las funciones es el de contener partes de código
// que queramos ejecutar y posiblemente reutilizar. ('modularizar')
// Sería conveniente separar los ejercicios de práctica en distintas funciones por este motivo,
// y para evitar tener mucho código comentado.

// para este ejemplo vamos a hacer el llamado a esta función desde el evento click de un botón en el html.


function evaluarParidad() {
    // Esta función llama a prompt() para tomar un número ingresado por el usuario,
    // luego se evalúa si el valor ingresado no es un número, si no lo es muestra una alerta.
    const numero = prompt('ingrese un número para evaluar su paridad');
    const esPar = (parseInt(numero) % 2) === 0;
    const noValido = numero === null || numero === '' || isNaN(numero);

    if (noValido) { // Esta condición se cumple si alguno de las 3 operaciones resulta en verdadero.
        alert('no se ingreso un número válido');
    }
    else if (esPar) { // Si no se cumple la condición anterior, usa el valor guardado en esPar para evaluar la condición.
        alert('el número ingresado es par');
    }
    else {
        alert('el número ingresado es impar');
    }
}

// declaramos una función bucleEvaluarParidad que llamara a su vez a evaluarParidad
function bucleEvaluarParidadDe3() {
    // Esta función tiene un bucle que se repetirá mientras que se cumpla la condición indicada.
    // Cuando esta no se cumpla, es decir que la condición resulte en false, saldrá del bucle.
    let contador = 0;
    while (contador < 3) { // Mientras el contador sea menor a 3, el resultado será true.

        evaluarParidad();

        contador++; // el operador ++ le suma +1 a contador, esto es lo que hará que el bucle deje de repetirse cuando no se cumpla la condición.
    }
    console.log('Terminó el bucle');
}

function bucleEvaluarParidad() {
    let aceptar = true;
    while (aceptar) { // Aquí el bucle se repetirá mientras el usuario presione Aceptar en la ventana del confirm().
        evaluarParidad();
        aceptar = confirm('¿Desea otro ingresar un número para evaluar?');
    }
}

function validarNumero(promptNum) { // La función recibe un valor y devuelve un booleano true/false si el valor es un número entero o no.
    const valido = !(promptNum === null || promptNum === '' || isNaN(promptNum)); // Esta condición se cumple si alguna de las 3 operaciones resulta en verdadero. Y luego el resultado es negado o invertido.
    // const valido = promptNum !== null && promptNum !== '' && !isNaN(promptNum); // Esta condición se cumple si el resultado de todas las operaciones es verdadero.
    return valido;
}


/*Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
    a)	La cantidad de valores negativos ingresados. ✅
    b)	La cantidad de valores positivos ingresados. ✅
    c)	La cantidad de múltiplos de 15. ✅
    d)	El valor acumulado de los números ingresados que son pares. ✅*/


/*
Entradas: 10 números ingresados por el usuario.

Salidas:
    De esos 10 números, mostrar la cantidad de
        negativos
        positivos
        múltiplos de 15
    y la suma de todos los números pares.

Procesos:
    Repetir 10 entradas de datos: BUCLE FOR ()
    Por cada entrada evaluar y contar: CONDICIONALES IF () Y VARIABLES CONTADOR
        si es negativo: OPERACIÓN LÓGICA DE RELACIÓN O RANGO
        si es positivo  
        si es múltiplo de 15  OPERACIÓN DE RELACIÓN Y COMPARACIÓN 
    Y sumar cada vez que sea par.  OPERACIÓN DE RELACIÓN, COMPARACIÓN Y VARIABLE ACUMULADOR
*/

function evaluar10Numeros() {
    // Para resolver este problema necesitaremos de varios contadores porque se requiere registrar distintas cantidades.
    let cantidadDeNegativos = 0;
    let cantidadDePositivos = 0;
    let cantidadDeMultiplosDe15 = 0;
    let acumuladorDePares = 0; // Y de un acumulador porque es necesario calcular una suma dentro del bucle.

    for (let contador = 0; contador < 10; contador++) { // Usamos un bucle for () para pedir 10 números al usuario y evaluar cada uno.
        const numeroEntero = parseInt(prompt('Ingrese un numero entero')); // Guardamos en una constante el número ingresado ya parseado/convertido a entero.
        const esNegativo = numeroEntero < 0;
        const esMultiploDe15 = numeroEntero % 15 === 0;

        if (esNegativo) {
            cantidadDeNegativos = cantidadDeNegativos + 1; // Le sumamos +1 al contador de Negativos si se cumple que numeroEntero es negativo.
        } else {
            cantidadDePositivos = cantidadDePositivos + 1; // +1 a la al contador de positivos si no es negativo.
        }
        if (esMultiploDe15) {
            cantidadDeMultiplosDe15 += 1; // +1 al contador de múltiplos si se cumple la condición.
        }
        if (numeroEntero % 2 === 0) {
            acumuladorDePares += numeroEntero; // Sumamos el número ingresado al acumulador si se cumple que el número ingresado es par.
        }
    }

    // Al finalizar la ejecución del bucle, mostramos los valores que guardan las variables.
    console.log('La cantidad de negativos es: 😎' + cantidadDeNegativos)
    console.log('La cantidad de positivos es: 😒' + cantidadDePositivos)
    console.log('La cantidad de múltiplo de 15 es: 🤞' + cantidadDeMultiplosDe15)
    console.log('La suma de los números pares es: 😜' + acumuladorDePares)
}



// const array = ['uno', 'dos', 'tres']

// for (let indice = 0; indice < array.length; indice++) {
//     const numero = array[indice];
//     console.log(numero)
// }
