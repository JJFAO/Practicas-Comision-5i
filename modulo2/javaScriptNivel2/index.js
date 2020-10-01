
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
        // Inicializamos con let las variables numero y valido, para poder reasignarlas durante la ejecución de nuestro programa.
        let numero = '';
        let valido = false;

        do { // Haremos una validación con un bucle do-while para pedir un número al usuario, hasta que ingrese uno válido.
            numero = prompt('Ingrese un numero entero');
            valido = validarNumero(numero); // La validación de números en un prompt() se vuelve frecuente, por tanto creamos una función para reutilizarla.

            if (numero === null) {
                console.log('Se canceló la ejecución 🥺');
                return; // Si el usuario presiona cancelar, con return finalizamos prematuramente la ejecución de la función.
            }
            if (!valido) {
                alert('No ingresó un número válido 😠');
            }
        } while (!valido); // Mientras el valor ingresado no sea válido, se repetirá el bucle.

        const numeroEntero = parseInt(numero); // Guardamos en una constante el número ingresado ya parseado/convertido a entero.
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

    console.log('Terminó el bucle');
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


function calcularPromedio() {
    //     Solicitar Notas de: Primer Parcial, Segundo Parcial y Proyecto Final.
    //     Ingresar el valor para cada nota.
    //     Calcular el promedio.
    //     Validar si gana o pierde la materia.

    const notas = [];

    let nombre = prompt("Ingresar Nombre del Alumno")

    let notaPrimerParcial = prompt("Ingresar nota del Primer Parcial")
    notas.push(notaPrimerParcial)

    let notaSegundoParcial = prompt("Ingresar nota del Segundo Parcial")
    notas.push(notaSegundoParcial)

    let notaProyectoFinal = prompt("Ingresar nota del Proyecto Final")
    notas.push(notaProyectoFinal)

    let sumaNotas = 0

    for (let i = 0; i < notas.length; i++) {
        sumaNotas = sumaNotas + parseInt(notas[i]);

    }

    let promedio = sumaNotas / notas.length
    let aprobado = promedio > 7

    if (aprobado) {

        console.log(nombre + " Aprobado")
    } else {
        console.log(nombre + " Desaprobado")

    }




}