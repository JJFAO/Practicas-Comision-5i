
// Un uso que le daremos a las funciones es el de contener partes de código que queramos ejecutar y posiblemente reutilizar.
// sería conveniente separar los ejercicios de práctica en funciones por este motivo, y para evitar tener mucho código comentado.

// para este ejemplo vamos a hacer el llamado a esta función desde el evento click de un botón en el html.

function evaluarParidad() {
    const numero = prompt('ingrese un número para evaluar si es par');
    const esPar = (numero % 2) === 0;
    console.log(esPar);
    // console.log(numero % 2 === 0); // también se puede expresar de esta forma.
}


