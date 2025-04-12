# Sesión 6: Introducción a JavaScript y Testing

## Fecha: 31/03/2025

## Objetivos de la Sesión

 - Identificar el funcionamiento del LocalStorage

## Temas Cubiertos

1. **LocalStorage en JavaScript**
    - Uso del LocalStorage para almacenar textos

## Ejercicios Realizados

### Ejercicio 1: Realizar un sitio web que guarde las notas creadas en el LocalStorage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    body{
        font-family: Arial, Helvetica, sans-serif;
        background-color: #f2f2f2f2;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .container{
        background-color: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
        width: 300px;
    }

    input{
        display: block;
        width: 95%;
        margin-bottom: 1rem;
        padding: 0.5rem;
    }

    button{
        width: 100%;
        padding: 0.5rem;
        background-color: #007bff;
        border: none;
        color: white;
        cursor: pointer;
    }
    span{
        cursor: pointer;
    }
    </style>
    <title>Clase de Javascript</title>
</head>
<body>
    <div class="container">
        <h1>Notas guardadas</h1>
        <input id="nota" type="text">
        <div style="padding-bottom: 10px; padding-top: 10px;">
            <button onclick="guardarNota()">Guardar nota</button>
        </div>
        <div>
            <button onclick="borrarNotas()">Borrar notas</button>
        </div>
        <h2>Listas de notas</h2>
        <ul id="listaNotas">

        </ul>
    </div>
    <script src="Clase6.js"></script>
</body>
</html>
```
```javascript
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
```
## Desafíos Encontrados


## Recursos Adicionales


## Próximos Pasos

- Practicar los usos del JSON y su estructura.

## Reflexiones Personales

Esta sesión me ayudó a practicar sobre el LocalStorage que tiene un navegador y como acceder a ella.

---

*Entregable correspondiente a la Clase 6 del Módulo 1: JavaScript Testing*