# Sesión 2: Fundamentos de Angular

## Fecha: 22/04/2025

## Objetivos de la Sesión

- Crear e integrar un nuevo componente

## Temas Cubiertos

1. **Fundamentos de Angular**
   - Creación e integracion de componentes
   - Animación de objetos con CSS

## Ejercicios Realizados

### Ejercicio 1: Crear e integrar correctamente un componente

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludo } from "./components/saludo/saludo.component";
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Saludo, CardComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Data
  titulo = 'Bienvenidos a mi página web';
  name = 'Jessica De Alba';
  dato = 'Ingeniero en computación';
  dato2 = '120';
  school = 'Centro Universitario de Ciencias Exactas e Ingenierías';
  empresa = 'Megacable';
}



import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //Menu data
  menu1 = 'Bienvenidos';
  menu2 = 'Nosotros';
  menu3 = 'Productos';
}

```

```html
<app-header></app-header>

  <h1>Este es el componente principal</h1>
  <h1>{{titulo}} mi nombre es <strong>{{name}}</strong></h1>
  <h3>Soy {{dato}} egresada del {{school}}</h3>
  He desarrollado {{dato2}} páginas en toda mi vida
  <p>Trabajo en {{empresa}}</p>
  <app-saludo></app-saludo>
  <div class="container">
    <app-card></app-card>
    <app-card></app-card>
    <app-card></app-card>
    <app-card></app-card>
    <app-card></app-card>
    <app-card></app-card>
    <app-card></app-card>
    <app-card></app-card>
    <app-card></app-card>
    <app-card></app-card>
  </div>
  
```
## Desafíos Encontrados

-

## Recursos Adicionales

- 

## Próximos Pasos

- Agregar nuevos objetos desde Typescript

## Reflexiones Personales

Esta sesión me ayudó a conocer la integración de un componente en Angular

---

*Entregable correspondiente a la Clase 2 del Módulo 2: Angular*