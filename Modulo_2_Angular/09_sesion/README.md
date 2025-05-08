# Sesión 9: Fundamentos de Angular

## Fecha: 02/05/2025

## Objetivos de la Sesión

- Uso del Output e Input entre componentes con un API

## Temas Cubiertos

1. **Fundamentos de Angular**
   - Uso del Output e Input

## Ejercicios Realizados

### Ejercicio 1: Crear e integrar correctamente elementos que reciba datos con las directivas Output e Input

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  @Input() info:any;
  @Output() seleccionado = new EventEmitter();

  seleccionar(){
    this.seleccionado.emit(this.info);
  }
}


```

```html
<h1>Lista de Productos</h1>

<p>{{itemSeleccionado?.nombre}}</p>

<div class="container">
    <!--Columna de productos-->
    <div style="width: 50%" class="containerProductos">
        <app-productos
        *ngFor="let item of items"
        [info] = "item"
        (seleccionado)="seleccionarItem($event)"
        ></app-productos>
    </div>
    <!--Columna de Detalle-->
    <div style="width: 50%;">
        <app-detalles [item]="itemSeleccionado"></app-detalles>
    </div>
</div>
```
## Desafíos Encontrados

-

## Recursos Adicionales

- 

## Próximos Pasos

- Uso de servicios en Angular

## Reflexiones Personales

Esta sesión me ayudó a conocer la integración de las directivas Input y Output con un API simulado

---

*Entregable correspondiente a la Clase 9 del Módulo 2: Angular*