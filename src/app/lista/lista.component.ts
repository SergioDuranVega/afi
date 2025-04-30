import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  calculadoras = [
    {
      titulo: 'Calculadora 1 (suma)',
      descripcion: 'Permite sumar dos números reales a y b',
      ruta: '/suma'
    },
    {
      titulo: 'Calculadora 2 (resta)',
      descripcion: 'Permite restar dos números reales a y b',
      ruta: '/resta'
    }
  ];
}

