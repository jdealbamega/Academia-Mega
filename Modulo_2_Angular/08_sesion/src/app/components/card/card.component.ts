import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title = "Esto es ejemplo de un ngModel";
  contenido = "Esto es una card que vamos a estar trabajando";
  botonText = "Conocer más";

  img = "https://picsum.photos/640/640?r" + Math.random();
  nombre = "Jessica De Alba"

  mostrarAlerta(){
    alert("Hola Jessica")
  }
}
