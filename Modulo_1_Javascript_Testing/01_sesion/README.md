# Sesión 1: Fundamentos de JavaScript

## Fecha: 24/03/2025

## Objetivos de la Sesión

- Introducción a JavaScript y sus fundamentos de primer uso para el desarrollo de un sitio web.
- Uso de variables y consola de navegador.

## Temas Cubiertos

1. **Fundamentos de JavaScript**
   - Variables tipo var y sus tipos de datos

## Ejercicios Realizados

### Ejercicio 1: Imprimir mi nombre y edad sobre la consola del navegador

```javascript
// Declaración de variables 
var int = 12345;
var string = "texto";
var boolean = true;

var nombre = "Jessica";
var apellido = "De Alba";
var nombreCompleto = `${nombre} ${apellido}`
var edad = 31;

// Se imprimen los datos declarados anteriormente sobre la consola del navegador
console.log(`Hola, soy ${nombreCompleto} y tengo ${edad} años`);
console.log("Hola, soy "+ nombreCompleto + " y tengo "+ edad + " años");

```
## Desafíos Encontrados

- **Uso de la letra ñ**: Tuve problemas iniciales la codificacion de idioma debido que no detectaba la letra Ñ, se solucionó agregando la etiqueta `<meta charset="UTF-8">` sobre el archivo `index.html`.

## Recursos Adicionales

- [Documentación HTML <meta> W3School](https://www.w3schools.com/tags/att_meta_charset.asp)

## Próximos Pasos

- Practicar el uso de variables ya que me serviran para las siguientes sesiones.

## Reflexiones Personales

Esta sesión me ayudó a comprender el uso de variables y el funcionamiento dentro de JavaScript desde el uso de numeros y texto.

---

*Entregable correspondiente a la Clase 1 del Módulo 1: JavaScript Testing*