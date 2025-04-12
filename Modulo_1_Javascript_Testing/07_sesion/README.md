# Sesión 7: Introducción a JavaScript y Testing

## Fecha: 01/04/2025

## Objetivos de la Sesión

 - Manipular datos de archivos JSON utilizando Java

## Temas Cubiertos

1. **JSON en JavaScript**
    - Uso del JSON para almacenar información

## Ejercicios Realizados

### Ejercicio 1: Realizar un sitio web que muestre en consola la informacion del JSON y el uso del mismo

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clase 7</title>
</head>
<body>
    <script src="Clase7.js"></script>
</body>
</html>
```
```javascript
function obtenerUsuario(id){
    try{
        if(typeof id !== "number") throw new Error("El id debe de ser un número");

            const usuarios = {1: "Ana", 2: "Carlos", 3: "Maria"};
            if(!usuarios[id]) throw new Error("Usuario no encontrado");
            console.log(usuarios);
            return `Usuario encontrado: ${usuarios[id]}`;
        
    }catch(error){
        console.error("Error:", error.message );
        return null;
    }
}


console.log(obtenerUsuario(2));
console.log(obtenerUsuario(3));
console.log(obtenerUsuario(1));
console.log(obtenerUsuario(8));
console.log(obtenerUsuario("a"));
console.log(obtenerUsuario("."));
console.log(obtenerUsuario("-3"));
```
## Desafíos Encontrados


## Recursos Adicionales


## Próximos Pasos

- Practicar los usos del JSON y su estructura sobre textos y otra información relevante.

## Reflexiones Personales

Esta sesión me ayudó a practicar sobre la estructura de los JSON, como invocarlos y hacer el trato de información necesaria.

---

*Entregable correspondiente a la Clase 7 del Módulo 1: JavaScript Testing*