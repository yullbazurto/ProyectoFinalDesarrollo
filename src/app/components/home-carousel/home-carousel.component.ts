import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent {
 slides = [
  { img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600', caption: 'Calidad garantizada' },
  { img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&sat=-100&blend=000', caption: 'Las mejores marcas' },
  { img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1600', caption: 'Envíos a todo el país' }
];

}