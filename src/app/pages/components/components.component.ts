import { Component } from '@angular/core';
import { SlideShowComponent } from '../../components/images/slideshow/slideshow.component';
import { SlideShowGalleryComponent } from '../../components/images/slideshow-gallery/slideshow-gallery.component';
import { AccordionComponent } from '../../components/more/accordion/accordion.component';
import { CommonModule } from '@angular/common';
import { CustomCssClassesComponent } from '../../components/more/custom-scc/custom-css-classes.component';
import { ImageModalComponent } from '../../components/images/image-modal/image-modal.component';
import { LightBoxComponent } from '../../components/images/light-box/light-box.component';
import { ResponsiveImageGridComponent } from '../../components/images/responsive-image-grid/responsive-image-grid.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    CommonModule, 
    SlideShowComponent, 
    SlideShowGalleryComponent,
    ImageModalComponent,
    AccordionComponent, 
    CustomCssClassesComponent,
    LightBoxComponent,
    ResponsiveImageGridComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {

}
