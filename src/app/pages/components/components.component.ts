import { Component } from '@angular/core';
import { SlideShowComponent } from '../../components/images/slideshow/slideshow.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [SlideShowComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {

}
