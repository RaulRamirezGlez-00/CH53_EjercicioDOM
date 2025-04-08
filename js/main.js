let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById(encabezado1);
let encabezado2 = document.getElementById(encabezado2);
let listas = document.getElementsByTagName("ul");

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
    event.preventDefault(); // No hagas lo que haces por defecto

    let element = document.createElement("li");
    element.innerText="Amother item"; //<li>Another item</li>
    element.classList.add("list-group-item");

    let element2 = element.cloneNode(true);

//before Inserta el elemento antes de la lista
    //listas.item(0).before(element);
//prepend Inserta el elemento al inicio de la lista
    //listas.item(0).prepend(element2);\

//append Inserta el elemento al final de la lista    
    //listas.item(0).append(element);
//after Inserta el elemento despues de la lista
    //listas.item(0).after(element2);

//afterbegin Inserta el elemento al principio de la lista
    //listas.item(1).insertAdjacentElement("afterbegin", element);
//beforeend Inserta el elemento al final de la lista
    //listas.item(1).insertAdjacentElement("beforeend", element2);

listas.item(1).insertAdjacentHTML("beforebegin",
    `<li class="list-group-item">Another new item</li>`);

listas.item(1).insertAdjacentHTML("afterend",
    `<li class="list-group-item">
        Another new item
    </li>`);

listas.item(1).insertAdjacentHTML("afterbegin",
    `<li class="list-group-item">Another new item</li>`);

listas.item(1).insertAdjacentHTML("beforeend",
    `<li class="list-group-item">Another new item</li>`);



});





// Ejercicio DOM 

// console.log(document.getElementById("encabezado2"));
// encabezado2.innerText = "Texto de prueba DOM"

// console.log(encabezado2.innerText);




