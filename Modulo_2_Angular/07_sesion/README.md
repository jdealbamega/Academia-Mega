# Sesión 7: Fundamentos de Angular

## Fecha: 29/04/2025

## Objetivos de la Sesión

- Uso del Input

## Temas Cubiertos

1. **Fundamentos de Angular**
   - Uso del Input

## Ejercicios Realizados

### Ejercicio 1: Crear e integrar correctamente 2 o más elementos que envie datos con la directiva Input

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() info = {
    nombre: '',
    edad: 0,
    profesion: ''
  }
}
```

```html
<h1>Componente Padre</h1>
<p>Aquí vamos a poner un componente hijo</p>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
    <app-hijo
    *ngFor="let usuario of usuarios"
    [info]="usuario"></app-hijo>
</div>
<div class="card">
    <h3>{{info.nombre}}</h3>
    <p><strong>Edad: </strong>{{info.edad}}</p>
    <p><strong>Profesion: </strong>{{info.profesion}}</p>
</div>
```
## Desafíos Encontrados

-

## Recursos Adicionales

- 

## Próximos Pasos

- Aprender el uso del Output

## Reflexiones Personales

Esta sesión me ayudó a conocer la integración del Input y sus ventajas

---

*Entregable correspondiente a la Clase 7 del Módulo 2: Angular*