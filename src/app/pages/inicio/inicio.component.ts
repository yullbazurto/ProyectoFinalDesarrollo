import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- IMPORTANTE
import { HomeCarouselComponent } from '../../components/home-carousel/home-carousel.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeCarouselComponent], // <-- AGREGA AQUÍ RouterModule
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {}