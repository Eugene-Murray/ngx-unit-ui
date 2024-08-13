import { Component } from '@angular/core';
import { ImageSlideShowComponent } from '../../components/image-slide-show/image-slide-show.component';
import { ImageSlideShowGalleryComponent } from '../../components/image-slideshow-gallery/image-slideshow-gallery.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { CommonModule } from '@angular/common';
import { CustomCssClassesComponent } from '../../components/custom-scc/custom-css-classes.component';
import { ImageModalComponent } from '../../components/image-modal/image-modal.component';
import { ImageLightBoxComponent } from '../../components/image-light-box/image-light-box.component';
import { ImageResponsiveGridComponent } from '../../components/image-responsive-grid/image-responsive-grid.component';
import { VideoFullScreenComponent } from "../../components/video-full-screen/video-full-screen.component";
import { StickySocialBarComponent } from "../../components/sticky-social-bar/sticky-social-bar.component";

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    CommonModule,
    ImageSlideShowComponent,
    ImageSlideShowGalleryComponent,
    ImageModalComponent,
    AccordionComponent,
    CustomCssClassesComponent,
    ImageLightBoxComponent,
    ImageResponsiveGridComponent,
    VideoFullScreenComponent,
    StickySocialBarComponent
],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {

}
