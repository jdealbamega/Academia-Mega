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
