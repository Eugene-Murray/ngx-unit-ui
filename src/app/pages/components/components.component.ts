import { Component } from '@angular/core';
import { SlideShowComponent } from '../../components/images/slideshow/slideshow.component';
import { SlideShowGalleryComponent } from '../../components/images/slideshow-gallery/slideshow-gallery.component';
import { AccordionComponent } from '../../components/more/accordion/accordion.component';
import { CommonModule } from '@angular/common';
import { CustomCssClassesComponent } from '../../components/more/custom-scc/custom-css-classes.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, SlideShowComponent, SlideShowGalleryComponent, AccordionComponent, CustomCssClassesComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {

}
