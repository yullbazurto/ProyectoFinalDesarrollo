import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';          // 👈 importa CommonModule

@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent {
  equipo = [
    { nombre: 'Yull Bazurto', rol: 'Fundador', foto: 'https://randomuser.me/api/portraits/men/11.jpg' },
    { nombre: 'Niurly Gorozabel', rol: 'Ventas',   foto: 'https://randomuser.me/api/portraits/women/12.jpg' },
    { nombre: 'Lautaro Arreaga', rol: 'Logística',foto: 'https://randomuser.me/api/portraits/men/13.jpg' }
  ];
}