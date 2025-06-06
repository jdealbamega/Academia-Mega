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
