let anioNacimiento = 2009;
let probabilidadDeX = 10.3;
let holaAmigoQueTal = "Bien amigo";
let valorBooleano = true;
let arregloNumeros = [1, 2, 3, 4];
let objetoPersona = { nombre: "Ana", edad: 30 };
let valorIndefinido;
let valorNulo = null;
const mes = "Junio";

// Funciones para mostrar cada valor con alert()
function mostrarAnioNacimiento() {
    alert("Año de nacimiento: " + anioNacimiento);
}

function mostrarProbabilidadDeX() {
    alert("Probabilidad de X: " + probabilidadDeX);
}

function mostrarHolaAmigoQueTal() {
    alert("Hola amigo, que tal?: " + holaAmigoQueTal);
}

function mostrarBooleano() {
    alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
    alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
    alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
    alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
    alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
    alert("Constante mes: " + mes);
}
