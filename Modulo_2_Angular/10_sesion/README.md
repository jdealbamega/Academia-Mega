# Sesión 10: Fundamentos de Angular

## Fecha: 05/05/2025

## Objetivos de la Sesión

- Uso de servicios y ciclos de vida en un componente

## Temas Cubiertos

1. **Fundamentos de Angular**
   - Uso de servicios

## Ejercicios Realizados

### Ejercicio 1: Crear e integrar correctamente elementos con servicios

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { HijoServiceComponent } from '../../components/hijo-service/hijo-service.component';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [FormsModule, HijoServiceComponent],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export class ServicePageComponent {
  newMessage = "";

  constructor(private dataService: DataService){

  }

  updateMessage(){
    this.dataService.setMessage(this.newMessage);
  }
}

import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-hijo-service',
  standalone: true,
  imports: [],
  templateUrl: './hijo-service.component.html',
  styleUrl: './hijo-service.component.css'
})
export class HijoServiceComponent {
  message = "";
  constructor(private dataService: DataService){}

  ngDoCheck(){
    this.message = this.dataService.getMessage();
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private message = "Hola desde el servicio";

  getMessage(){
    return this.message;
  }

  setMessage(newMessage:string){
    this.message = newMessage;
  }
}
```

```html
<h1>Clase de Servicios</h1>
<h2>Componente Padre</h2>

<input type="text" [(ngModel)]="newMessage" placeholder="Escribe un mensaje">
<button (click)="updateMessage()">Enviar al hijo</button>
<app-hijo-service></app-hijo-service>


<h2>Hola soy el componente hijo</h2>
<p>Mensaje recibido: {{message}}</p>
```
## Desafíos Encontrados

-

## Recursos Adicionales

- 

## Próximos Pasos

- Uso de API REST en Angular

## Reflexiones Personales

Esta sesión me ayudó a conocer el ciclo de vida de un componente y el uso de servicios para conectar variables entre componentes

---

*Entregable correspondiente a la Clase 10 del Módulo 2: Angular*