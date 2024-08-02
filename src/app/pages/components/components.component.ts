import { Component } from '@angular/core';
import { SlideShowComponent } from '../../components/images/slideshow/slideshow.component';
import { SlideShowGalleryComponent } from '../../components/images/slideshow-gallery/slideshow-gallery.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [SlideShowComponent, SlideShowGalleryComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {

}
