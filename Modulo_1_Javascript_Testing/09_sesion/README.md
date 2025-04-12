# Sesión 9: Introducción a JavaScript y Testing

## Fecha: 04/04/2025

## Objetivos de la Sesión

 - Aprender a organizar el código en módilos para mejorar su estructura u reutilización.

## Temas Cubiertos

1. **Módulos en JavaScript**
    - Uso de módulos y export en JavaScript

## Ejercicios Realizados

### Ejercicio 1: Realizar un sitio web que consuma las funciones como módulos

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Módulos en JavaScript</title>
</head>
<body>
    <h1>Abre la consola para ver los mensajes</h1>
    <script type="module" src="main.js"></script>
</body>
</html>
```
```javascript
export function sumar(a,b){
    return a + b;
}
export function restar(a,b){
    return a - b;
}
export function multiplicar(a,b){
    return a * b;
}
export function dividir(a,b){
    return a / b;
}


import { sumar, restar, multiplicar, dividir } from "./Actividad";

console.log(sumar(5,7));
console.log(restar(6,4));
console.log(multiplicar(8,8));
console.log(dividir(20,5));
```
## Desafíos Encontrados

- **Error de CORS**: Tuve problemas iniciales para correr el sitio ya que me daba errores de permisos, lo corregí abriendo el sitio como proyecto en VisualStudio.

## Recursos Adicionales


## Próximos Pasos

- Conocer más de los módulos y sus usos en JavaSCript.

## Reflexiones Personales

Esta sesión me ayudó a conocer los módulos, expoertar e importar funciones para una organización buena en el código como parte de buenas practicas.

---

*Entregable correspondiente a la Clase 9 del Módulo 1: JavaScript Testing*