import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludo } from "./components/saludo/saludo.component";
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './components/todo/todo.component';
import { ProductManagerComponent } from './components/product-manager/product-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    Saludo, 
    CardComponent, 
    HeaderComponent, 
    TarjetaComponent, 
    CommonModule,
    TodoComponent,
    ProductManagerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Data
  titulo = 'Bienvenidos a mi página web';
  name = 'Jessica De Alba';
  dato = 'Ingeniero en computación';
  dato2 = '120';
  school = 'Centro Universitario de Ciencias Exactas e Ingenierías';
  empresa = 'Megacable';
  isVisible = true;

  frutas = ['Manzana', 'Plátano', 'Naranja', 'Uva']

  rolUsuario ="admin"
  tareaImportante = true
  isUrgente = false
}
