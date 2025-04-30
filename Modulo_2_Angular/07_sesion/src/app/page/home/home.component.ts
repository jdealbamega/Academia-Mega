import { Component } from '@angular/core';
import { HijoComponent } from '../../components/hijo/hijo.component';
import { CommonModule } from '@angular/common';
import { NOMEM } from 'dns';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HijoComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //Simulacion de API
  usuarios = [
    {nombre: "Juan", edad: 25, profesion: "Arquitecto"},
    {nombre: "Ana", edad: 29, profesion: "Diseñadora"},
    {nombre: "Luis", edad: 22, profesion: "Estudiante"},
    {nombre: "Jessica", edad: 31, profesion: "Ingeniero"}
  ]
}
