# Sesión 12: Fundamentos de Angular

## Fecha: 07/05/2025

## Objetivos de la Sesión

- Consumir una API con HttpClient

## Temas Cubiertos

1. **Fundamentos de Angular**
   - Consumo de APIs con HttpClient

## Ejercicios Realizados

### Ejercicio 1: Crear un código de un formulario basico con validaciones

```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiURL:string = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/";
  constructor(private http:HttpClient) { }

  getCreatures(): Observable<any>{
    return this.http.get(`${this.apiURL}creatures`);
  }
}

import { Component } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hyrule-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hyrule-list.component.html',
  styleUrl: './hyrule-list.component.css'
})
export class HyruleListComponent {
  creatures: any[] = [];

  constructor(private apiService: ApiServiceService){}

  ngOnInit(){
    this.apiService.getCreatures().subscribe(data => {
      this.creatures = data.data;
      console.log(this.creatures);
    });
  }
}

```

```html
<h1>Clase HTTP-Client</h1>
<div class="zelda-api" style="text-align: center;">
    <h1>Criaturas de The Legend of Zelda</h1>

    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
        <div class="card" *ngFor="let creature of creatures">
            <img [src]="creature.image" width="200">
            <div class="card-content">
                <h3 class="card-title">{{creature.name}}</h3>
                <p class="card-description">{{creature.description}}</p>
                <p class="card-description"><strong style="color: #bb9d67;">Ubicaciones: </strong>{{creature.common_locations}}</p>
            </div>
        </div>
    </div>
</div>


```
## Desafíos Encontrados

-

## Recursos Adicionales

- 

## Próximos Pasos

- Uso de Pipes en Angular

## Reflexiones Personales

Esta sesión me ayudó a conocer el uso de HttpClient y como realizar el consumo de las APIs.

---

*Entregable correspondiente a la Clase 12 del Módulo 2: Angular*