# Sesión 1: Fundamentos de Angular

## Fecha: 21/04/2025

## Objetivos de la Sesión

- Introducción a Angular y sus fundamentos de primer uso para el desarrollo de un proyecto web.
- Conocimiento de los componentes HTML, CSS y TS

## Temas Cubiertos

1. **Fundamentos de Angular**
   - ¿Qué es Angular?
   - Estructura de un proyecto Angular

## Ejercicios Realizados

### Ejercicio 1: Mostrar datos desde el TS a el front end

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Menu data
  menu1 = 'Bienvenidos';
  menu2 = 'Nosotros';
  menu3 = 'Productos';

  //Data
  titulo = 'Bienvenidos a mi página web';
  name = 'Jessica De Alba';
  dato = 'Ingeniero en computación';
  dato2 = '120';
  school = 'Centro Universitario de Ciencias Exactas e Ingenierías';
  empresa = 'Megacable';
}
```

```html
<nav>
  <ul>
    <li><a href="#" class="active">{{menu1}}</a></li>
    <li><a href="#">{{menu2}}</a></li>
    <li><a href="#">{{menu3}}</a></li>
  </ul>
</nav>
<main>
  <h1>{{titulo}} mi nombre es <strong>{{name}}</strong></h1>
  <h3>Soy {{dato}} egresada del {{school}}</h3>
  He desarrollado {{dato2}} páginas en toda mi vida
  <p>Trabajo en {{empresa}}</p>
  <form action="">
    <input type="text">
    <input type="text">
    <input type="text">
    <button type="button">Enviar</button>
  </form>
</main>
```
## Desafíos Encontrados

-

## Recursos Adicionales

- 

## Próximos Pasos

- Crear nuevos componentes

## Reflexiones Personales

Esta sesión me ayudó a conocer la estructura general de un proyecto nuevo de Angular

---

*Entregable correspondiente a la Clase 1 del Módulo 2: Angular*