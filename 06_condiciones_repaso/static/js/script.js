console.log("¡Conexión correcta!");

// 1️⃣ Edad y etapa de vida
// Pide la edad de una persona.
// Si es menor a 13 → “Eres un niño”.
// Si tiene entre 13 y 17 → “Eres adolescente”.
// Si tiene 18 o más → “Eres adulto”.
// 📘 Práctica: uso de rangos con if, else if, else.

function verificarEtapa() {
    let edad = parseInt(prompt("Ingrese su edad: "));

    if (edad < 13) {
        alert("Eres un niño")
    } else if (edad >= 13 && edad < 18) {
        alert("Eres adolescente")
    } else {
        alert("Eres un adulto")
    }
}


// 2️⃣ Validar contraseña exacta
// Pide una contraseña.
// Si el texto ingresado es exactamente "12345", muestra “Acceso permitido”.
// Si no, muestra “Acceso denegado”.
// 📘 Práctica: comparación exacta (===).

function validarContra() {
    let clave = prompt("Ingrese su contraseña: ");

    if (clave == 12345) {
        alert("Acceso permitido.")
    } else {
        alert("Acceso denegado.")
    }
}


// 3️⃣ Verificar letra en palabra
// Pide una palabra.
// Si contiene la letra “e” (mayúscula o minúscula) → “La palabra contiene la letra E”.
// Si no → “No contiene la letra E”.
// 💡 Usa:
// if (palabra.toLowerCase().includes('e')) { ... }

function verificarLetra() {
    let palabra = prompt("Ingrese una palabra: ");

    if (palabra.toLowerCase().includes('e')) {
        alert("La palabra contiene la letra E.")
    } else {
        alert("No contiene la letra E.")
    }
}

// 4️⃣ Comparar dos números
// Pide dos números con prompt().
// Si el primero es mayor → “El primer número es mayor”.
// Si el segundo es mayor → “El segundo número es mayor”.
// Si son iguales → “Son iguales”.
// 📘 Práctica: comparaciones dobles.

function compararNum() {
    let num1 = parseInt(prompt("Ingrese el primer número: "));
    let num2 = parseInt(prompt("Ingrese el segundo número: "));

    if (num1 > num2) {
        alert(" El numero " + num1 + " es mayor que " + num2)
    } else if (num1 < num2) {
        alert(" El numero " + num1 + " es menor que " + num2)
    } else {
        alert(" El numero " + num1 + " es igual que " + num2)
    }
}

// 5️⃣ Determinar si el número es par o impar
// Pide un número.
// Si el resto al dividir por 2 (% 2) es 0 → “Número par”.
// Si no → “Número impar”.
// 📘 Práctica: uso del operador módulo %.

function numPar() {
    let numero = parseInt(prompt("Ingrese un número: "));

    if (numero % 2 == 0) {
        alert("Número par")
    } else {
        alert("Número impar")
    }
}

// 6️⃣ Revisar palabra inicial
// Pide una palabra.
// Si empieza con la letra “A” o “a” → “Empieza con A”.
// Si no → “No empieza con A”
// 💡 Puedes usar:
// if (palabra[0].toLowerCase() === 'a') { ... }

function ingresaPalabra() {
    let palabra = prompt("Ingresa una palabra: ");

    if (palabra[0].toLowerCase() === 'a') {
        alert("Empieza con A")
    } else {
        alert("No empieza con A")
    }
}

// 7️⃣ Temperatura ambiente
// Pide una temperatura.
// Si es menor a 10 → “Hace frío”.
// Si es entre 10 y 25 → “Clima templado”.
// Si es mayor o igual a 26 → “Hace calor”.
// 📘 Práctica: comparaciones encadenadas.

function pedirTemperatura() {
    let temp = parseInt(prompt("Ingrese una temperatura. "));

    if (temp < 10) {
        alert("Hace frío")
    } else if (temp >= 10 && temp <= 25) {
        alert("Clima templado")
    } else {
        alert("Hace calor")
    }
}

// 8️⃣ Nombre reconocido
// Pide un nombre.
// Si el nombre es “Dany” → “Hola, profesor 👋”.
// Si el nombre es “Ely” → “Hola, mamá 🌷”.
// En cualquier otro caso → “Hola, visitante”.
// 📘 Práctica: varias condiciones exclusivas.

function pedirNombre() {
    let name = prompt("Ingrese un nombre: ");

    if (name == "Dany") {
        alert("Hola, profesor 👋")
    } else if (name == "Ely") {
        alert("Hola, mamá 🌷")
    } else {
        alert("Hola, visitante")
    }
}

// 9️⃣ Nota de evaluación
// Pide una nota entre 1 y 7.
// Si es 4 o más → “Aprobado”.
// Si es menor que 4 → “Reprobado”.
// Si está fuera del rango 1–7 → “Nota inválida”.
// 📘 Práctica: validaciones con límites.

function verificarNota() {
    let nota = parseInt(prompt("Ingrese su nota: "));

    if (nota < 1) {
        alert("Nota inválida")
    } else if (nota > 7) {
        alert("Nota inválida")
    } else if (nota >= 4) {
        alert("Aprobado")
    } else {
        alert("Reprobado")
    }
}

// 🔟 Verificar si contiene una palabra clave
// Pide una frase.
// Si incluye la palabra “Jesús” (mayúscula o minúscula) → “Tu frase tiene la palabra clave 🙌”.
// Si no → “No contiene la palabra clave”.
// 💡 Usa:
// if (frase.toLowerCase().includes('jesús')) { ... }

function ingresarFrase() {
    let frase = prompt("Ingrese una frase: ");

    if (frase.toLowerCase().includes('jesús')) {
        alert("Tu frase contiene la palabra clave 🙌")
    } else {
        alert("No contiene la palabra clave")
    }
}