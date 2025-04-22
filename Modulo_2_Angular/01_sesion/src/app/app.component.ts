import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Menu data
  menu1 = 'Bienvenidos';
  menu2 = 'Nosotros';
  menu3 = 'Productos';

  //Data
  titulo = 'Bienvenidos a mi página web';
  name = 'Jessica De Alba';
  dato = 'Ingeniero en computación';
  dato2 = '120';
  school = 'Centro Universitario de Ciencias Exactas e Ingenierías';
  empresa = 'Megacable';
}
