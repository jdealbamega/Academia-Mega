# Sesión 4: Fundamentos de Angular

## Fecha: 24/04/2025

## Objetivos de la Sesión

- Uso de las directivas estructurales ngFor, ngIf

## Temas Cubiertos

1. **Fundamentos de Angular**
   - Uso de las directivas estructurales ngFor, ngIf

## Ejercicios Realizados

### Ejercicio 1: Crear e integrar correctamente un componente con las directivas ngFor y ngIf

```typescript
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  nuevaTarea = "";

  tareas = [
    { texto: "Aprender Angular", completada: false},
    { texto: "Hacer Ejercicio", completada: true}
  ]

  agregrarTareas(){
    if(this.nuevaTarea.trim()){
      this.tareas
      .push({texto: this.nuevaTarea, completada: false});
      this.nuevaTarea = "";
    }
  }

  limpiarTareas(){
    this.tareas = [];
  }

  toggleCompletar(index: number){
    this.tareas[index].completada = !this.tareas[index].completada;
  }
}

```

```html
<div class="todo-container">
    <h2>Lista de Tareas</h2>

    <input type="text" [(ngModel)]="nuevaTarea" placeholder="Nueva Tarea...">
    <button (click)="agregrarTareas()">Agregar</button>
    <button (click)="limpiarTareas()">Limpiar</button>

    <p *ngIf="tareas.length === 0">No hay tareas pendientes</p>
    <ul>
        <li *ngFor="let tarea of tareas; let i = index">
            <span [style.textDecoration]="tarea.completada? 'line-through':'none'">{{tarea.texto}}</span>
            <button (click)="toggleCompletar(i)">{{tarea.completada? "Desmarcar":"Completar"}}</button>
        </li>
    </ul>
</div>
  
```
## Desafíos Encontrados

-

## Recursos Adicionales

- 

## Próximos Pasos

- Aprender el uso de la directiva ngSwitch

## Reflexiones Personales

Esta sesión me ayudó a conocer la integración de las directivas estructurales ngFor y ngIf y sus usos para las buenas practicas y uso profesional en un proyecto real.

---

*Entregable correspondiente a la Clase 4 del Módulo 2: Angular*