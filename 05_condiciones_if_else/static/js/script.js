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