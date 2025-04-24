# Sesión 3: Fundamentos de Angular

## Fecha: 22/04/2025

## Objetivos de la Sesión

- Uso del ngModel y cambios en tiempo real

## Temas Cubiertos

1. **Fundamentos de Angular**
   - Uso del ngModel

## Ejercicios Realizados

### Ejercicio 1: Crear e integrar correctamente un componente y agregar un ngModel para realizar cambios en vivo

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  nombre:string = "";
  img:string = "https://";
  message:string = "Bienvenido!";


  cambiarSaludo(){
    this.message = `Hola ${this.nombre || "visitante"}!`;

  }
}


```

```html
<div class="card">
    <h2>{{message}}</h2>
    <img [src]="img" alt="Foto de perfil">
    <input type="text" [(ngModel)] = "nombre" placeholder="Escribe tu nombre">
    <input type="text" [(ngModel)] = "img" placeholder="URL de tu imagen">

    <button class="btn" (click)="cambiarSaludo()">Actualizar datos</button>
</div>
  
```
## Desafíos Encontrados

-

## Recursos Adicionales

- 

## Próximos Pasos

- Actualizar objetos con ngModel

## Reflexiones Personales

Esta sesión me ayudó a conocer la integración de ngModel y los usos que tiene.

---

*Entregable correspondiente a la Clase 3 del Módulo 2: Angular*