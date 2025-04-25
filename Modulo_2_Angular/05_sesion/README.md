# Sesión 5: Fundamentos de Angular

## Fecha: 25/04/2025

## Objetivos de la Sesión

- Uso de las directivas estructurales ngSwitch, ngStyle, ngClass

## Temas Cubiertos

1. **Fundamentos de Angular**
   - Uso de las directivas estructurales ngSwitch, ngStyle, ngClass

## Ejercicios Realizados

### Ejercicio 1: Crear e integrar correctamente un componente con las directivas ngFor, ngIf, ngSwitch, ngStyle, ngClass

```typescript
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-manager.component.html',
  styleUrl: './product-manager.component.css'
})
export class ProductManagerComponent {
categoriaSeleccionada = "";

  productos = {
    electronica: [
      {nombre: "Laptop", precio:1200, disponible:true, descuento: 10},
      {nombre: "Smartphone", precio:800, disponible:false, descuento: 0},
    ],
    ropa:[
      {nombre: "Camisa", precio:30, disponible:true, descuento: 0},
      {nombre: "Jeans", precio:50, disponible:true, descuento: 0},
    ],
    alimentos:[
      {nombre: "Carnes", precio:15, disponible:true, descuento: 0},
      {nombre: "Verduras", precio:10, disponible:true, descuento: 10},
    ]
  }

  showCategoria(categoria : string){
    this.categoriaSeleccionada = categoria;
  }
}

```

```html
<div class="container">
    <h2>Gestor de Productos</h2>
    <div class="categoria-buttons">
        <button class="btn" (click)="showCategoria('electronica')">Electronica</button>
        <button class="btn" (click)="showCategoria('ropa')">Ropa</button>
        <button class="btn" (click)="showCategoria('alimentos')">Alimentos</button>
    </div>
    <!--Electronica-->
    <div [ngSwitch] = "categoriaSeleccionada">
        <div *ngSwitchCase="'electronica'">
            <h3>Productos Electrónicos</h3>
            <ng-container *ngIf="productos.electronica.length > 0">
                <div *ngFor="let p of productos.electronica"
                    [ngClass]="{'agotado':!p.disponible}"
                    [ngStyle]="{'color':p.descuento > 0 ? 'green' : 'black'}"
                    class="producto">
                    {{p.nombre}} - ${{p.precio}}
                    <span *ngIf="p.descuento > 0"> (Descuento {{p.descuento}})</span>
                    <span *ngIf="!p.disponible">- No disponible</span>
                </div>
            </ng-container>
        </div>
        <!--Ropa-->
        <div *ngSwitchCase="'ropa'">
            <h3>Productos de Ropa</h3>
            <ng-container *ngIf="productos.ropa.length > 0">
                <div *ngFor="let p of productos.ropa"
                    [ngClass]="{'agotado':!p.disponible}"
                    [ngStyle]="{'color':p.descuento > 0 ? 'green' : 'black'}"
                    class="producto">
                    {{p.nombre}} - ${{p.precio}}
                    <span *ngIf="p.descuento > 0"> (Descuento {{p.descuento}})</span>
                    <span *ngIf="!p.disponible">- No disponible</span>
                </div>
            </ng-container>
        </div>
        <!--Alimentos-->
        <div *ngSwitchCase="'alimentos'">
            <h3>Productos Alimentos</h3>
            <ng-container *ngIf="productos.alimentos.length > 0">
                <div *ngFor="let p of productos.alimentos"
                    [ngClass]="{'agotado':!p.disponible}"
                    [ngStyle]="{'color':p.descuento > 0 ? 'green' : 'black'}"
                    class="producto">
                    {{p.nombre}} - ${{p.precio}}
                    <span *ngIf="p.descuento > 0"> (Descuento {{p.descuento}})</span>
                    <span *ngIf="!p.disponible">- No disponible</span>
                </div>
            </ng-container>
        </div>
    </div>
</div>
  
```
## Desafíos Encontrados

-

## Recursos Adicionales

- 

## Próximos Pasos

- Aprender el uso de todas las directivas estructurales en un proyecto

## Reflexiones Personales

Esta sesión me ayudó a conocer la integración del resto de las directivas estructurales y sus usos para las buenas practicas y uso profesional en un proyecto real.

---

*Entregable correspondiente a la Clase 5 del Módulo 2: Angular*