# Sesión 5: Introducción a JavaScript y Testing

## Fecha: 03/04/2025

## Objetivos de la Sesión

 - Identificar el uso de APIs
 - Conocer el formato JSON
 - Uso de async y await para la consulta de APIs

## Temas Cubiertos

1. **Introducción a HTML y CSS**
    - Funciones async
    - Uso del await para consumo de APIs

## Ejercicios Realizados

### Ejercicio 1: Realizar un sitio web que muestre el listado de elementos consumidos desde un API

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="with=device-width, initial-scale=1.0">
    <title>Enciclopedia The Legend of Zelda</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<style>
    @font-face {
        font-family: ZeldaFont;
        src: url('font/botw.otf');
    }
    body{
        font-family: ZeldaFont;
        background-image: url("img/botw.jpg");
        background-size: 100% auto;
    }
    .tab-container{
        background-image: url('img/texture.jpeg'); 
        border-radius: 15px;
    }
    .zelda-button{
        background-color: #4d1d1d;
        color: #bb9d67;
    }
    .active{
        background-color: #000000 !important;
        color: #bb9d67 !important;
    }
    .nav-link:hover{
        background-color: #bb9d67 !important;
        color: #000000 !important;
    }
    .col-md-3{
        padding-bottom: 20px;
        padding-top: 20px;
        text-align: -webkit-center;
    }
    .card{
        border-color: #bb9d67;
    }
    .card-body{
        background-color: #000000;
    }
    .card-title{
        color: #bb9d67;
    }
    .card-img-top:hover, .card-body:hover{
        background-color: #4d1d1d;
    }
</style>
<body>
    <div class="container text-center">
        <div class="row">
            <h1>Enciclopedia The Legend of Zelda</h1>
        </div>
    </div>
    <div class="container tab-container" >
        <ul class="nav nav-pills justify-content-center">
          <li>    
            <button class="nav-link active zelda-button" id="creatures" data-bs-toggle="tab" data-bs-target="#creatures-tab" type="button" role="tab" aria-controls="creatures-tab-pane" aria-selected="true">Creatures</button>
          </li>
          <li>    
            <button class="nav-link zelda-button" id="monsters" data-bs-toggle="tab" data-bs-target="#monsters-tab" type="button" role="tab" aria-controls="monsters-tab-pane" aria-selected="false">Monsters</button>
          </li>
          <li>    
            <button class="nav-link zelda-button" id="materials" data-bs-toggle="tab" data-bs-target="#materials-tab" type="button" role="tab" aria-controls="materials-tab-pane" aria-selected="false">Materials</button>
          </li>
          <li>    
            <button class="nav-link zelda-button" id="equipment" data-bs-toggle="tab" data-bs-target="#equipment-tab" type="button" role="tab" aria-controls="equipment-tab-pane" aria-selected="false" >Equipment</button>
          </li>
          <li>    
            <button class="nav-link zelda-button" id="treasure" data-bs-toggle="tab" data-bs-target="#treasure-tab" type="button" role="tab" aria-controls="treasure-tab-pane" aria-selected="false" >Treasure</button>
          </li>
        </ul>
      
        <div class="tab-content">
          <div id="creatures-tab" class="tab-pane active">
            <div class="container text-center">
                <div class="row" id="creatures-container"></div>
            </div>
          </div>
          <div id="monsters-tab" class="tab-pane fade">
            <div class="container text-center">
                <div class="row" id="monsters-container"></div>
            </div>
         </div>
          <div id="materials-tab" class="tab-pane fade">
            <div class="container text-center">
                <div class="row" id="materials-container"></div>
            </div>
          </div>
          <div id="equipment-tab" class="tab-pane fade">
            <div class="container text-center">
                <div class="row" id="equipment-container"></div>
            </div>
          </div>
          <div id="treasure-tab" class="tab-pane fade">
            <div class="container text-center">
                <div class="row" id="treasure-container"></div>
            </div>
          </div>
        </div>
    </div>
    
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
    async function getCreaturesData() {
        const container = document.getElementById("creatures-container");
        //for(let i = 1; i <=20; i++){
            try{
                const respuesta = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures`);
                console.log(respuesta);
                const allData = await respuesta.json();
                
                for(let i = 1; i < allData.data.length; i++){
                    const card = document.createElement("div");
                    card.className = "col-md-3";
                    card.innerHTML= `
                            <div class="card" style="width: 15rem;">
                                <img src="${allData.data[i].image}"  class="card-img-top" alt="${allData.data[i].name}">
                                <div class="card-body">
                                    <h5 class="card-title">${allData.data[i].name}</h5>
                                </div>
                            </div>
                    `;
                    container.appendChild(card);
                }
            }
            catch(error){
                console.log("Error al obtener la información: ", error)
            }
        //}
    }
    async function getMonstersData() {
        const container = document.getElementById("monsters-container");
        //for(let i = 1; i <=20; i++){
            try{
                const respuesta = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters`);
                console.log(respuesta);
                const allData = await respuesta.json();
                
                for(let i = 1; i < allData.data.length; i++){
                    const card = document.createElement("div");
                    card.className = "col-md-3";
                    card.innerHTML= `
                            <div class="card" style="width: 15rem;">
                                <img src="${allData.data[i].image}"  class="card-img-top" alt="${allData.data[i].name}">
                                <div class="card-body">
                                    <h5 class="card-title">${allData.data[i].name}</h5>
                                </div>
                            </div>
                    `;
                    container.appendChild(card);
                }
            }
            catch(error){
                console.log("Error al obtener la información: ", error)
            }
        //}
    }
    async function getMaterialsData() {
        const container = document.getElementById("materials-container");
        //for(let i = 1; i <=20; i++){
            try{
                const respuesta = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials`);
                console.log(respuesta);
                const allData = await respuesta.json();
                
                for(let i = 1; i < allData.data.length; i++){
                    const card = document.createElement("div");
                    card.className = "col-md-3";
                    card.innerHTML= `
                            <div class="card" style="width: 15rem;">
                                <img src="${allData.data[i].image}"  class="card-img-top" alt="${allData.data[i].name}">
                                <div class="card-body">
                                    <h5 class="card-title">${allData.data[i].name}</h5>
                                </div>
                            </div>
                    `;
                    container.appendChild(card);
                }
            }
            catch(error){
                console.log("Error al obtener la información: ", error)
            }
        //}
    }
    async function getEquipmentData() {
        const container = document.getElementById("equipment-container");
        //for(let i = 1; i <=20; i++){
            try{
                const respuesta = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment`);
                console.log(respuesta);
                const allData = await respuesta.json();
                
                for(let i = 1; i < allData.data.length; i++){
                    const card = document.createElement("div");
                    card.className = "col-md-3";
                    card.innerHTML= `
                            <div class="card" style="width: 15rem;">
                                <img src="${allData.data[i].image}"  class="card-img-top" alt="${allData.data[i].name}">
                                <div class="card-body">
                                    <h5 class="card-title">${allData.data[i].name}</h5>
                                </div>
                            </div>
                    `;
                    container.appendChild(card);
                }
            }
            catch(error){
                console.log("Error al obtener la información: ", error)
            }
        //}
    }
    async function getTreasuresData() {
        const container = document.getElementById("treasure-container");
        //for(let i = 1; i <=20; i++){
            try{
                const respuesta = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/treasure`);
                console.log(respuesta);
                const allData = await respuesta.json();
                
                for(let i = 1; i < allData.data.length; i++){
                    const card = document.createElement("div");
                    card.className = "col-md-3";
                    card.innerHTML= `
                            <div class="card" style="width: 15rem;">
                                <img src="${allData.data[i].image}"  class="card-img-top" alt="${allData.data[i].name}">
                                <div class="card-body">
                                    <h5 class="card-title">${allData.data[i].name}</h5>
                                </div>
                            </div>
                    `;
                    container.appendChild(card);
                }
            }
            catch(error){
                console.log("Error al obtener la información: ", error)
            }
        //}
    }
    getCreaturesData();
    getMonstersData();
    getMaterialsData();
    getEquipmentData();
    getTreasuresData();
</script>
</html>
```
## Desafíos Encontrados

- **Insertar un font personalizado**: Tuve problemas iniciales para agregar un fot especifico en todo el sitio, se agregó la propiedad `@font-face` en la etiqueta de estilos para que el sitio web reconociera ese nuevo font.

## Recursos Adicionales

- [Documentación CSS @font-face Rule](https://www.w3schools.com/cssref/atrule_font-face.php)

## Próximos Pasos

- Conocer más de Bootstrap y todas sus herramientas de estilos

## Reflexiones Personales

Esta sesión me ayudó a practicar más sobre el uso de las funciones asíncronas y el consumo de APIs con JavaScript nativo, además del uso de Bootstrap como framework de estilos.

---

*Entregable correspondiente a la Clase 8 del Módulo 1: JavaScript Testing*