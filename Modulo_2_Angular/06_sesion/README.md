# Sesión 6: Fundamentos de Angular

## Fecha: 28/04/2025

## Objetivos de la Sesión

- Uso del RouterOutlet

## Temas Cubiertos

1. **Fundamentos de Angular**
   - Uso de las rutas de navegación en Angular

## Ejercicios Realizados

### Ejercicio 1: Crear e integrar correctamente 2 o más rutas de navegación con RouterOutlet y RouterLink

```typescript
import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { TodoComponent } from './components/todo/todo.component';
import { ProductManagerComponent } from './components/product-manager/product-manager.component';
import { HomeComponent } from './page/home/home.component';
import { ErrorComponent } from './page/error/error.component';

export const routes: Routes = [
    {
        path: 'card',
        component: CardComponent
    },    
    {
        path: 'todo',
        component: TodoComponent
    },       
    {
        path: 'gestor',
        component: ProductManagerComponent
    },  
    {
        path: '',
        component: HomeComponent
    },  
    {
        path: '**',
        component: ErrorComponent
    }
];


```

```html
<h1>Rutas</h1>
<app-header></app-header>
<router-outlet></router-outlet>


<nav>
    <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/card">Card</a></li>
        <li><a routerLink="/todo">Todo</a></li>
        <li><a routerLink="/gestor">Gestor</a></li>
    </ul>
</nav>
```
## Desafíos Encontrados

-

## Recursos Adicionales

- 

## Próximos Pasos

- Aprender el uso del Diseño responsivo.

## Reflexiones Personales

Esta sesión me ayudó a conocer la integración del router y la navegación en un sitio web sin la necesidad de recargar la página completa.

---

*Entregable correspondiente a la Clase 6 del Módulo 2: Angular*