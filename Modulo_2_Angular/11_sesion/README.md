# Sesión 11: Fundamentos de Angular

## Fecha: 06/05/2025

## Objetivos de la Sesión

- Crear fomularios con el FormsModule

## Temas Cubiertos

1. **Fundamentos de Angular**
   - Uso de Formularios en Angular

## Ejercicios Realizados

### Ejercicio 1: Crear un código de un formulario basico con validaciones

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  usuario = {
    nombre: '',
    email: '',
    edad: null
  }

  onSubmmit(){
    console.log("Datos del formulario: ", this.usuario);
    alert("Formulario enviado correctamente")
  }
}

```

```html
<div class="container">
    <h1>Registro de Usuario</h1>
    <form #formulario="ngForm" (ngSubmit)="onSubmmit()">
        <!--Nombre-->
        <div class="form-control">
            <label for="nombre">Nombre:</label>
            <input 
                type="text" 
                name="nombre" 
                id="nombre" 
                [(ngModel)]="usuario.nombre" 
                required
                minlength="3"
                #nombre="ngModel"
            />
            <div class="error" *ngIf="nombre.invalid && nombre.touched">
                El nombre es obligatorio y debe tener al menos 3 caracteres
            </div>
        </div>
        <!--Email-->
        <div class="form-control">
            <label for="email">Email:</label>
            <input 
                type="email" 
                name="email" 
                id="email" 
                [(ngModel)]="usuario.email" 
                required
                #email="ngModel"
            />
            <div class="error" *ngIf="email.invalid && email.touched">
                Ingresa un correo válido
            </div>
        </div>
        <!--Edad-->
        <div class="form-control">
            <label for="edad">Edad:</label>
            <input 
                type="number" 
                name="edad" 
                id="edad" 
                [(ngModel)]="usuario.edad" 
                required
                min="18"
                #edad="ngModel"
            />
            <div class="error" *ngIf="edad.invalid && edad.touched">
                Debes tener al menos 18 años
            </div>
        </div>
        
        <button
        [disabled]="formulario.invalid"
        type="submit"
        >Enviar</button>
    </form>
    <h1>Datos Actuales</h1>
    <pre>
        {{usuario | json}}
    </pre>
</div>
```
## Desafíos Encontrados

-

## Recursos Adicionales

- 

## Próximos Pasos

- Uso de API REST en Angular

## Reflexiones Personales

Esta sesión me ayudó a conocer el modulo Forms y los usos que tiene para realizar formularios completos.

---

*Entregable correspondiente a la Clase 11 del Módulo 2: Angular*