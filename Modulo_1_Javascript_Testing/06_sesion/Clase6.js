/*const titulo = document.getElementById("titulo");
const parrafos = document.getElementsByClassName("mensaje");
const botones = document.getElementsByTagName("button");

const primerParrafo = document.querySelector(".mensaje");
const todosLosParrafos = document.querySelectorAll(".mensaje");

titulo.textContent = "Bienvenido a mi página web";
titulo.style.color = "blue";

primerParrafo.innerHTML= "<strong>Texto en negritas </strong>";

document.getElementById("cambiarTexto").addEventListener("click", function(){
    document.getElementById("titulo").textContent = "Texto cambiado con Javascript";
})

document.getElementById("boton").addEventListener("click", function(){
    document.getElementById("resultado").textContent = "Boton clickeado";
})

const hoverTexto =  document.getElementById("hoverTexto");

hoverTexto.addEventListener("mouseover", function(){
    hoverTexto.style.color="red";
})

hoverTexto.addEventListener("mouseout", function(){
    hoverTexto.style.color="black";
})

console.log("Hola desde el script");

const usuario = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid"
}

const usuarioJson = JSON.stringify(usuario);
console.log("JSON en texto", usuarioJson);

const usuarioObjeto = JSON.parse(usuarioJson);
console.log("JSON en objeto", usuarioObjeto);

localStorage.setItem("usuario", usuarioJson);
*/

function guardarNota(){
    const texto = document.getElementById("nota").value.trim();
    if(texto === "") return;

    let notas = JSON.parse(localStorage.getItem("notas")) || [];
    notas.push(texto);

    localStorage.setItem("notas", JSON.stringify(notas));
    document.getElementById("nota").value = "";
    mostrarNotas();
}

function mostrarNotas(){
    const lista = document.getElementById("listaNotas");
    lista.innerHTML = "";
    let notas = JSON.parse(localStorage.getItem("notas")) || [];

    console.log(notas);
    notas.forEach( (nota, index)=>{
        const li = document.createElement("li");
        li.innerHTML= `${nota} <span onclick="borrarNota(${index})"><img width="5%" src="delete.png" alt="X"></span>`
        lista.appendChild(li);
    });
}

function borrarNotas(){
    localStorage.removeItem("notas");
    mostrarNotas();
}

function borrarNota(index){
    let notas = JSON.parse(localStorage.getItem("notas")) || [];
    notas.splice(index,1);
    console.log(notas);
    localStorage.setItem("notas", JSON.stringify(notas));
    mostrarNotas();
}


mostrarNotas();