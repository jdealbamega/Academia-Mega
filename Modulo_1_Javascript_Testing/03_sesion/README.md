# Sesión 3: Introducción a JavaScript y Testing

## Fecha: 26/03/2025

## Objetivos de la Sesión

 - Identificar los tipos de funciones y sus declaraciones.
 - Conocer el alcance de las variables locales y globales.

## Temas Cubiertos

1. **Funciones en JavaScript**
    - Declaración de funciones.
	- Funciones Declarativas, Anónimas y de Flecha
	- Scope y closures

## Ejercicios Realizados

### Ejercicio 1: Crea una función que devuelva otra función que multiplica

```javascript
function multiplicador(factor){
    return function(numero){
        return numero * factor;
    }
}

const doble = multiplicador(2);
const cuadruplicar = multiplicador(4);
const octuple = multiplicador(8);

console.log(doble(10));
console.log(cuadruplicar(10));
console.log(octuple(10));
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Practicar los usos de funciones y saber identificar cual tipo de función es más útil para tener un código más limpio y ordenado y así tener buenas practicas.

## Reflexiones Personales

Esta sesión me ayudó a comprender el uso de cada tipo de funciones y reflejarlo como parte de buenas practicas de desarrollo.

---

*Entregable correspondiente a la Clase 3 del Módulo 1: JavaScript Testing*