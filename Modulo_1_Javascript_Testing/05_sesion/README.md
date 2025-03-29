# Sesión 5: Introducción a JavaScript y Testing

## Fecha: 28/03/2025

## Objetivos de la Sesión

 - Identificar el funcionamiento de la hoja de estilos
 - Crear clases y hacer uso de los mismos
 - Uso de los DOM

## Temas Cubiertos

1. **Introducción a HTML y CSS**
    - Hoja de estilos
    - Agregar estilos por medio de clases, etiquetas o id únicos 
    - Implementacion de los DOM

## Ejercicios Realizados

### Ejercicio 1: Realizar un sitio web agregando estilos de CSS y el uso de DOM de JavaScript

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Clase 5 de Javascript para aprender</title>
        <style>
            body {
                background-color: #fab4f9;
                font-family: 'Courier New', Courier, monospace;
            }
            .titulo{
                color: white;
                font-weight: lighter;
                font-style: italic;
                text-align: center;
            }
            .parrafo{
                background-color: #9e5b9d;
                margin: 40px;
                border: 5px solid #754f74;
                padding: 10px;
                text-align: center;
                color: white;
            }
            .bordes{
                border-radius: 8px;
            }
            .caja{
                background-color: #581b57;
                width: 40%;
                padding: 40px;
                margin: 0 30px 0 30px;
                border-radius: 8px;
                text-align: center;
                color: #fab4f9;
                display: -webkit-inline-box;
            }
        </style>
    </head>
    <body>
        <h1 class="titulo">Mi página con CSS</h1>
        <p class="parrafo bordes">¿Qué es CSS?</p>
        <div style="text-align: center;">
            <div class="caja">
                <p><strong>Hojas de Estilo en Cascada</strong> (del inglés <strong>C</strong>ascading <strong>S</strong>tyle <strong>S</strong>heets) o <strong>CSS</strong> 
                    es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML (incluyendo varios lenguajes basados en XML como SVG, 
                    MathML o XHTML). CSS describe cómo debe ser renderizado el elemento estructurado en la pantalla, en papel, en el habla o en otros medios.</p>
            </div>
            <div class="caja">
                <p>CSS es utilizado para diseñar y dar estilo a las páginas web, por ejemplo, alterando la fuente, color, tamaño y espaciado del contenido, 
                    dividirlo en múltiples columnas o agregar animaciones y otras características decorativas. Este módulo proporciona un suave comienzo hacia el 
                    dominio de CSS con los conceptos básicos acerca de su funcionamiento, la sintaxis y la manera en que puedes comenzar a utilizarlo para agregar 
                    estilos al HTML.</p>
            </div>
        </div>
        <div style="text-align: center; margin: 40px;">
            <div class="caja">
                <p id="data"></p>
            </div>
        </div>
        <script src="./Clase5.js">
        </script>
    </body>
</html>
```
```javascript
var element = document.getElementById("data");
element.textContent = "Éste texto es generado desde JavaScript";
```
## Desafíos Encontrados

- **Alinear 2 DIV en una sola fila**: Tuve problemas iniciales para acomodar ambos `<div>` en una sola fila, hice uso de la herramienta de inspeccionar del navegador para jugar con los estilos en tiempo real hasta lograr el resultado esperado.

## Recursos Adicionales

- [Documentación CSS](https://developer.mozilla.org/es/docs/Web/CSS)

## Próximos Pasos

- Practicar los usos de los diferentes estilos para obtener un resultado satisfactorio en el sitio web generado.

## Reflexiones Personales

Esta sesión me ayudó a practicar más sobre el uso de las hojas de estilo, los DOM y la herramienta de inspeccion que el navegador otorga.

---

*Entregable correspondiente a la Clase 5 del Módulo 1: JavaScript Testing*