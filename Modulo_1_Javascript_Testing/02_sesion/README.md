# Sesión 1: Introducción a JavaScript y Testing

## Fecha: 25/03/2025

## Objetivos de la Sesión

 - Identificar los tipos de variables que trabaja JavaScript.
 - Identificar los operadores logicos y sus usos.
 - Conocer la sintaxis de algunos tipo de iteracción.

## Temas Cubiertos

1. **Estructura de control**
   - Variables y constantes (let, const)
	- Operadores aritmeticos
	- Bucles

## Ejercicios Realizados

### Ejercicio 1: Realizar un mini control de acceso limitado a 5 intentos

```javascript
let intentos = 0;
let claveCorrecta = "229940";
let claveIngresada;
var letra;

while(intentos < 5){
    claveIngresada = prompt("Ingresa la contraseña");
    letra = (/[a-zA-Z]/).test(claveIngresada);
    

    console.log(`Es letra: ${letra}`);
    if(claveIngresada === claveCorrecta && letra === false){
        console.log("Acceso concedido.");
        break;
    }else if(letra === true){
        console.log("La contraseña no puede incluir letras");        
    }else{
        console.log("Contraseña incorrecta");
    }
    intentos ++;
}

if(intentos === 5){
    console.log("Has agotado tus intentos, intenta más tarde");
}
```
## Desafíos Encontrados

- **Uso de la letra ñ**: Tuve problemas iniciales la codificacion de idioma debido que no detectaba la letra Ñ, se solucionó agregando la etiqueta `<meta charset="UTF-8">` sobre el archivo `index.html`.

## Recursos Adicionales

- [Documentación HTML <meta> W3School](https://www.w3schools.com/tags/att_meta_charset.asp)

## Próximos Pasos

- Practicar los usos de las condicionales y los ciclos para realizar diferentes procesos como lo fue realizar un control de acceso limitado.

## Reflexiones Personales

Esta sesión me ayudó a comprender el uso de la condicional `if` y los ciclos `while` y `for` además de los usos de las variables let y const en algunos procesos como parte de buenas practicas.

---

*Entregable correspondiente a la Clase 2 del Módulo 1: JavaScript Testing*