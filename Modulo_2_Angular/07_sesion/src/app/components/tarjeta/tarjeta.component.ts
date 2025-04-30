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
