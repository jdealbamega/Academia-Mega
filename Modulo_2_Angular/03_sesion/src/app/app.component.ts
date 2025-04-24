import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludo } from "./components/saludo/saludo.component";
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Saludo, CardComponent, HeaderComponent, TarjetaComponent],
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
}
