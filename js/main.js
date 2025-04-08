let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById(encabezado1);
let encabezado2 = document.getElementById(encabezado2);
let lista = document.getElementsByTagName("ul");

let elementos = document.getElementsByClassName("list-group-item");

let otroElemento = document.querySelector("ul>li"); //primero

let otrosElementos = document.querySelectorAll("ul>li"); //todos

console.log(listas.leght); //2
//console.log(litas[0]);
console.log(listas.item(1));

console.log(elementos.leght); //10
let contador = 0;
function modifica(){
//encabezado1.innerHTML = "<em>Ejercicio</em> DOM";
encabezado1.innerHTML += "<em>Ejercicio</em> DOM";
encabezado2.innerText = ++contador;
} //modifica

//console.log(document.getElementById("encabezado1"));

btnMostrar.addEventListener("click", function(event){
    console.log("boton btnModificar presionado");
});





// Ejercicio DOM 

// console.log(document.getElementById("encabezado2"));
// encabezado2.innerText = "Texto de prueba DOM"

// console.log(encabezado2.innerText);




