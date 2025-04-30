# Sesión 8: Fundamentos de Angular

## Fecha: 30/04/2025

## Objetivos de la Sesión

- Uso del Output

## Temas Cubiertos

1. **Fundamentos de Angular**
   - Uso del Output

## Ejercicios Realizados

### Ejercicio 1: Crear e integrar correctamente elementos que reciba datos con la directiva Output

```typescript
import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ProductosComponent } from '../../components/productos/productos.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos-info',
  standalone: true,
  imports: [CardComponent, ProductosComponent, CommonModule],
  templateUrl: './productos-info.component.html',
  styleUrl: './productos-info.component.css'
})
export class ProductosInfoComponent {
  items=[
    {id: 1, nombre: 'Producto A', descripcion: 'Descripcion del producto A', precio: 100},
    {id: 2, nombre: 'Producto B', descripcion: 'Descripcion del producto B', precio: 200},
    {id: 3, nombre: 'Producto C', descripcion: 'Descripcion del producto C', precio: 300},
    {id: 4, nombre: 'Producto D', descripcion: 'Descripcion del producto D', precio: 400},
    {id: 5, nombre: 'Producto E', descripcion: 'Descripcion del producto E', precio: 500}
  ]

  itemSeleccionado: any = null;

  seleccionarItem(item: any){
    this.itemSeleccionado = item;
  }
}


import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  @Input() info:any = "";
}

```

```html
<h1>Lista de Productos</h1>

<div style="display: flex; gap: 2rem;">
    <div style="width: 50%">
        <app-productos
        *ngFor="let item of items"
        [info] = "item"></app-productos>
    </div>
</div>

<div>
    <h3>{{info.nombre}}</h3>
</div>
```
## Desafíos Encontrados

-

## Recursos Adicionales

- 

## Próximos Pasos

- Uso de servicios en Angular

## Reflexiones Personales

Esta sesión me ayudó a conocer la integración del Output y sus ventajas

---

*Entregable correspondiente a la Clase 8 del Módulo 2: Angular*