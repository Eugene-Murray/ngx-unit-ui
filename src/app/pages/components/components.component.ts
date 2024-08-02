import { Component } from '@angular/core';
import { SlideshowComponent } from '../../components/images/slideshow/slideshow.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [SlideshowComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {

}
