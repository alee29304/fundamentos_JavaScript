
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

    for (let i = 1; 1 <= 10; i++) {
        tablas += `\n ${num} + ${1} = ${num * 1}`
    }
    alert(tablas);
}