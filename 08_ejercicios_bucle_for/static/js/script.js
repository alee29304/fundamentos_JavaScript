// 5️⃣ Bucle for: Tabla de multiplicar
// Pide un número al usuario e imprime su tabla de multiplicar del 1 al 10 en un solo alert.

// Ejemplo de resultado:
// Tabla del 5
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50

function tablaMulti() {
    let num = parseInt(prompt("Ingrese un número: "));
    let tablas = `Tabla de ${num}: `;

    for (let i = 1; i <= 10; i++) {
        tablas += `\n ${num} x ${i} = ${num * i}`
    }
    alert(tablas);
}

// 6️⃣ Bucle for: Números pares hasta n
// Solicita un número n e imprime todos los números pares desde 1 hasta n usando un bucle for.
// Ejemplo de resultado:
// 2, 4, 6, 8, 10

function cuentaRegresiva() {
    let num = parseInt(prompt("Ingrese un número: "));
    let resultado = `Los números pares de ${num} son: `;
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            resultado += ` ${i}`
        }
    }
    alert(resultado);
}

// 7️⃣ Bucle for: Contar letras de una palabra
// Pide una palabra al usuario y muestra cuántas letras tiene usando un bucle for para recorrerla.

function contarLetras() {
    let palabra = prompt("Ingrese una palabra: ");
    let letras = palabra.length;
    let resultado = 0;
    for (let i = 0; i <= letras; i++) {
        resultado += ` ${i}`
    }
    alert(` La palabra ${palabra} tiene ${letras} letras`);
}

// 8️⃣ Bucle for: Calcular factorial
// Solicita un número n e imprime el factorial de ese número (n × n-1 × n-2 × … × 1) usando un bucle for.

function calcularFacto() {
    let numero = parseInt(prompt("Ingresa un número: "));
    let factorial = 1;
    let largo = "";
    for (let i = 1; i <= numero; i++) {
        largo += ` ${i}`
        factorial *= i;
    }
    alert(`el factorial de ${numero} es${largo} = ${factorial}`)
}

// 9️⃣ Bucle for: Suma de números impares hasta n
// Pide un número n y suma todos los números impares desde 1 hasta n.
// Muestra el resultado con alert.

function sumaImpar() {
    let num = parseInt(prompt("Ingresa un número: "));
    let respuesta = 1;
    let impar = "1";
    for (let i = 2; i <= num; i++) {
        if (i % 2 != 0) {
            respuesta += i
            impar += ` + ${i}`
        }
    }
    alert(`La suma de ${impar} es ${respuesta}`);
}