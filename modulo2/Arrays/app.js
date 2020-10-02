
    //     Solicitar Notas de: Primer Parcial, Segundo Parcial y Proyecto Final.
    //     Ingresar el valor para cada nota.
    //     Calcular el promedio.
    //     Validar si gana o pierde la materia.

function calcularPromedio() {
    const notas = [];
    let suma = 0;
    const notaParcial1 = prompt('Ingrese nota del primer parcial');
    const notaParcial2 = prompt('Ingrese nota del segundo parcial');
    const notaProyectoFinal = prompt('Ingrese nota del proyecto final');

    notas.push(notaParcial1);
    notas.push(notaParcial2);
    notas.push(notaProyectoFinal);

    for (let indice = 0; indice < notas.length; indice++) {
        // const element = notas[indice];
        suma = suma + parseInt(notas[indice]);
    }

    const promedio = suma / notas.length;

    if (promedio >= 6) {
        console.log('Aprobó la materia');
    } else {
        console.log('Desaprobó la materia 😣');
    }

    console.log(notas);

}



















// function calcularPromedio() {
//     //     Solicitar Notas de: Primer Parcial, Segundo Parcial y Proyecto Final.
//     //     Ingresar el valor para cada nota.
//     //     Calcular el promedio.
//     //     Validar si gana o pierde la materia.
//     const notas = [];
//     let sumaNotas = 0;
//     const nombre = prompt("Ingresar Nombre del Alumno");
//     const notaPrimerParcial = prompt("Ingresar nota del Primer Parcial");
//     const notaSegundoParcial = prompt("Ingresar nota del Segundo Parcial");
//     const notaProyectoFinal = prompt("Ingresar nota del Proyecto Final");

//     notas.push(notaPrimerParcial);
//     notas.push(notaSegundoParcial);
//     notas.push(notaProyectoFinal);

//     for (let i = 0; i < notas.length; i++) {
//         sumaNotas = sumaNotas + parseInt(notas[i]);
//     }

//     const promedio = sumaNotas / notas.length;
//     const aprobado = promedio > 7;

//     if (aprobado) {
//         console.log(nombre + " Aprobado");
//     } else {
//         console.log(nombre + " Desaprobado");
//     }
// }


// function calcularAprobados() {
//     //     Solicitar cantidad de alumnos.
//     //     Solicitar Notas del Primer Parcial.
//     //     Ingresar el valor para cada nota.
//     //     Calcular cantidad de aprobados.
//     const notas = [];
//     let sumaNotas = 0;
//     let cantidadDeAprobados = 0;
//     const cantidadDeAlumnos = prompt("Ingresar cantidad de alumnos");

//     for (let contador = 0; contador < cantidadDeAlumnos; contador++) {
//         const notaPrimerParcial = prompt("Ingresar nota del Primer Parcial");
//         notas.push(notaPrimerParcial);
//     }

//     for (let i = 0; i < notas.length; i++) {
//         const aprobado = notas[i] >= 7;
//         if (aprobado) {
//             cantidadDeAprobados = cantidadDeAprobados + 1;
//         }
//     }

//     console.log('La cantidad de aprobados es: ' + cantidadDeAprobados);
// }