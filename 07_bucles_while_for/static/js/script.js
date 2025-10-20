console.log("Conexión exitosa...")

/*
Contar números del 10 al 1
*/

// Creación función bucle while
function ejecutarWhile() {
    let resultado = "El resultado es: ";
    let count = 10;
    while (count > 0) {
        resultado += ` ${count}`;
        count--
    }
    alert(resultado);
}

// Creación función bucle for
function ejecutarFor() {
    let resultado = "El resultado es: ";
    // Inicia bucle
    for (let i = 10; i > 0; i--) {
        resultado += ` ${i}`;
    }
    alert(resultado);
}

// Ejercicios

// 1️⃣ Bucle while: Imprimir del 1 a n (n es ingresado por teclado).
// Escribe un programa que utilice un bucle while para imprimir los números del 1 al n con un solo Alert.

function ejercicioUno() {
    let resultado = "Contamos: "
    let n = parseInt(prompt("Ingresar un número: "));
    let contador = 1;
    while (contador <= n) {
        resultado += ` ${contador}`
        console.log(contador)
        contador++;
    }
    console.log(resultado)
}