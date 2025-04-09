# Sesión 11: Introducción a JavaScript y Testing

## Fecha: 07/04/2025

## Objetivos de la Sesión

 - Identificar el uso de el try y catch para realizar pruebas de calidad

## Temas Cubiertos

1. **Introducción a Testing**
    - Casos de uso para Testing de aplicaciones

## Ejercicios Realizados

### Ejercicio 1: Realizar un aplicativo que devuelve el promedio

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Calculadora de Promedio</title>
</head>
<body>
    <h1>Calculadora de Promedio</h1>

    <form id="formularioNotas">
        <label>Nota 1: </label>
        <input type="number" id="nota1">
        <label>Nota 2: </label>
        <input type="number" id="nota2">
        <label>Nota 3: </label>
        <input type="number" id="nota3">

        <button type="submit">Calcular</button>
    </form>

    <div id="resultado"></div>
    <script src="script.js"></script>
</body>
</html>
```
```javascript
document.getElementById("formularioNotas").addEventListener("submit", function(e){
    e.preventDefault();

    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    const resultado = document.getElementById("resultado");

    try{
        const promedio = calcularPromedio(nota1, nota2, nota3);
        resultado.textContent = `El promedio es: ${promedio.toFixed(2)}`;
        resultado.style.color = (promedio >= 6) ? "green" : "orange";

    }catch(error){
        console.log(error.message);
        resultado.textContent = `${error.message}`;
        resultado.style.color = "red";
    }

})


function calcularPromedio(n1, n2, n3){
    console.log("Calculando promedio...");
    if([n1,n2,n3].some(isNaN)){
        throw new Error("Todas las notas deben ser números válidos");
    }

    if([n1,n2,n3].some(n => n<0 || n>10)){
        throw new Error("Todas las notas deben estar entre 0 y 10");
    }
    return (n1 + n2 + n3) / 3
}
```
```css
body{
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px;
    background-color: #f4f4f4;
}
form{
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    max-width: 300px;
}
label{
    margin-top: 10px;
    display: block;
}
input{
    width: 95%;
    margin-bottom: 10px;
    padding: 5px;
}
button{
    padding: 10px;
    background-color: #27ae60;
    color: white;
    border: none;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
}
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Aprender a documentar y realizar un reporte de testing

## Reflexiones Personales

Esta sesión me ayudó a conocer las buenas practicas del Testing y aplicarlos en mi día a día.

---

*Entregable correspondiente a la Clase 11 del Módulo 1: JavaScript Testing*