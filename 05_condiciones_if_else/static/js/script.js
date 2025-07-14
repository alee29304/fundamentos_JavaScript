// Ejercicios Condiciones IF - ELSE
console.log("Conexion con js establecida...")

/* Edad para votar
Solicita la edad del usuario mediante prompt().
Muestra con alert() si puede votar
(10 años o más) o no.
*/
function edadVotar() {
    let edad = parseInt(prompt("Ingrese su Edad:"));
    // Input conversión string a número
    // Condición if - else if - else
    if (edad >= 18) {
        alert("Su edad " + edad + " aprobada para votar.");
    } else if (edad >= 0 && edad < 18) { // &&: compuerta AND
        alert("Su edad " + edad + " no esta aprobada para votar.");
    } else {
        alert("Ingrese un valor valido");
    }
}

/* Contraseña válida
Pide una contraseña con prompt(). Si es igual a "1234",
muestra un mensaje de acceso permitido. En caso contrario, muestra acceso denegado.
*/
function contrasenaValida() {
    let clave = "1234";
    let pass = prompt("Ingrese su contraseña: ");

    if (pass == clave) {
        alert("Acceso permitido...")
    } else {
        alert("Acceso denegado...")
    }
}

/* Verificar par o impar
Pide un número por prompt(). 
Evalúa si el número es par o impar y muestra el resultado con alert().
*/
function parImpar() {
    let numero = parseInt(prompt("Ingresa un numero par o impar"));

    if (numero % 2 == 0) {
        alert("El número es par...");
    } else {
        alert("El numero es impar...");
    }
}

/* Temperatura ambiental
Solicita la temperatura actual. Si es mayor o igual a 30, muestra “Hace calor”,
 de lo contrario muestra “Clima agradable”.
 */
function temperaturaAmbiente() {
    let temp = parseInt(prompt("Ingresa la temperatura"));

    if (temp <= 30) {
        alert("Clima Agradable");
    } else if (temp >= 30) {
        alert("Hace calor");
    } else {
        alert("Ingrese una temperatura");
    }
}

/* Comparar dos números
Solicita dos números al usuario. Compara ambos y muestra cuál es mayor o si son iguales.
*/
function compararNum() {
    let num1 = parseInt(prompt("Ingresar primer numero"));
    let num2 = parseInt(prompt("Ingresar segundo numero"));

    if (num1 < num2) {
        alert(" el numero " + num1 + " es menor que " + num2)
    } else if (num1 == num2) {
        alert(" el numero " + num1 + " es igual que " + num2)
    } else {
        alert(" el numero " + num1 + " es mayor que " + num2)
    }
}

/* Calificación escolar
Pide una nota entre 1 y 7. Si es 4 o más, muestra “Aprobado”, si es menor, muestra “Reprobado”.
*/
function calificacionEscolar() {
    let cal = parseInt(prompt("Ingresa tu nota:"));

    if (cal < 4) {
        alert("Reprobado");
    } else if (cal >= 4 && cal <= 7) {
        alert("Aprobado");
    } else {
        alert("Ingrese un valor valido");
    }
}

/* Nombre de usuario válido
Pide un nombre de usuario. Si el valor ingresado es "admin",
muestra “Bienvenido, administrador”. Si no, muestra “Usuario no reconocido”.
*/
function userName() {
    let user = prompt("Ingrese su usuario:");

    if (user == "admin") {
        alert("Bienvenido, administrador.");
    } else if (user !== "admin") {
        alert("Usuario no reconocido.");
    } else {
        alert("Ingrese un usuario");
    }
}

/* Verificar si una palabra empieza con "A"
 Pide una palabra al usuario. Verifica si empieza con la letra “A” mayúscula y muestra un mensaje acorde.
*/
function verificarPalabra() {
    let palabra = prompt("Ingresa una palabra:");

    if (palabra[0] == "A") {
        alert("La palabra si empieza con A");
    } else if (palabra !== "A") {
        alert("La palabra no empieza por A");
    } else {
        alert("Ingrese una palabra");
    }
}

/* Precio con descuento
 Solicita el precio de un producto. Si el precio es mayor a 10000,
  muestra que aplica descuento. Si no, indica precio normal.
*/
function precioDesc() {
    let precio = prompt("Ingrese un precio:");

    if (precio >= 10000) {
        alert("Aplica descuento");
    } else if (precio < 10000) {
        alert("No aplica descuento");
    } else {
        alert("Ingrese un precio");
    }
}

/*Verificar si una persona puede conducir
 Solicita la edad del usuario y si tiene licencia (por ejemplo, respondiendo "sí" o "no"). Si tiene
  18 o más y respondió que tiene licencia, muestra “Puede conducir”. Si no, muestra “No puede conducir”.
*/
function personaConducir() {
    let edad = parseInt(prompt("Ingresar edad:"));
    let licencia = prompt('¿Tienes licencia de conducir?');

    if (edad >= 18 && licencia == "si") {
        alert("Puede conducir");
    } else if (edad > 18 && edad > 0 && licencia == "no") {
        alert("No puede conducir");
    } else {
        alert("Ingresar datos validos");
    }
}


/* 11. - Comparar la longitud de dos palabras
Solicita dos palabras con prompt().Compara cuántas letras tiene cada
 una y muestra cuál es más larga o si tienen el mismo largo. */

function palabraLarga() {
    let pal1 = prompt("Ingrese primera palabra")
    let pal2 = prompt("Ingrese segunda palabra")

    if (pal1 == "" && pal2 == "") {

    } else if (pal1.length < pal2.length) {
        alert(`La palabra más larga es ${pal2} con $pal.length} caracteres`)
    } else if (pal1.length == pal2.length) {
        alert("")
    }
}