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


//     Solicitar cantidad de alumnos. ✅
//     Solicitar Notas del Primer Parcial. Ingresar el valor para cada nota.
//     Calcular cantidad de aprobados.


function calcularAprobados() {
    const cantidadDeAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos'));
    const notas = [];
    let cantidadDeAprobados = 0;

    for (let i = 0; i < cantidadDeAlumnos; i++) {
        const nota = parseInt(prompt('Ingrese una nota'));
        notas.push(nota);
    }

    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        if (nota >= 6) {
            cantidadDeAprobados += 1;
        }
    }
    console.log(`Del total de alumnos ${cantidadDeAlumnos} ,la cantidad de aprobados es: 😏 ${cantidadDeAprobados}`);
    // console.log('Del total de alumnos ' + cantidadDeAlumnos + ',la cantidad de aprobados es: 😏' + cantidadDeAprobados);
}




// const usuario = { nombre: 'Rick', onda: 'buena' };

// usuario['onda'] = 'no tan buena';
// usuario.humor = 'muy alegre';

// console.log(usuario);





// -----------------------
// "Hardcodear" un array de objetos de productos, con nombre y precio.
// Pedir al usuario un nombre y precio, 
// para agregar un producto al array.


const productos = [
    { nombre: 'manzana 🍎', precio: 10 },
    { nombre: 'pera 🍐', precio: 20 },
    { nombre: 'banana 🍌', precio: 30 }
];

function agregarProductos() {
    const nombre = prompt('ingrese un nombre para el producto 🥫');
    const precio = parseFloat(prompt('ingrese un precio para el producto 💵'));
    const producto = { nombre: nombre, precio: precio };
    
    productos.push(producto);
    console.log(productos);
}



//-------- Adicional
// Que el usuario pueda seleccionar distintos productos de la lista.
// Que estos se agreguen a un array de compras.
// Y al finalizar que muestre la suma total de todos los productos
// que seleccionó el usuario.


const compras = [];
let sumaDeCompras = 0;

function mostrarProductos() {
    console.log(productos);
    // Mostramos la lista de productos en la consola,
    // usaremos la posición de cada elemento como código de producto.
}

function seleccionarProducto() {
    const codigo = parseInt(prompt('ingrese el código del producto'));
    // El código que representa la posición de un producto en el array productos,
    compras.push(codigo);
    // lo agregamos a un lista de compras. Por ej: 0 será el código para manzana.
    console.log('Se agregó ' + productos[codigo].nombre + 'a la lista de compras. 🛒');
    // Mostramos el nombre del producto seleccionado.
}

function calcularTotalDeCompra() {
    for (let i = 0; i < compras.length; i++) {
        // Recorremos la lista de compras,
        const codigo = compras[i];
        // la constante "codigo" es el código guardado en la posición "i",
        // del array de compras, en cada iteración.
        const producto = productos[codigo];
        // Usando el código accedemos a los datos del producto al que corresponde.
        sumaDeCompras += parseFloat(producto.precio);
        // La variable "sumaCompras", que definimos fuera de la función,
        // acumula la suma de precio de todos los productos. 
    }
    console.log('La suma total es de: ' + sumaDeCompras);
    // Mostramos la suma total.
}


