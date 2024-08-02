import {
  Component,
  effect,
  ElementRef,
  input,
  viewChildren,
} from '@angular/core';

@Component({
  selector: 'app-slideshow-gallery',
  standalone: true,
  imports: [],
  templateUrl: './slideshow-gallery.component.html',
  styleUrl: './slideshow-gallery.component.scss'
})
export class SlideShowGalleryComponent {
  images = input<string[]>();
  slideIndex = 1;
  slideItemCount = 0;

  private slides = viewChildren<ElementRef>('slideItem');
  private dots = viewChildren<ElementRef>('dot');

  constructor() {
    effect(() => {
      this.showSlides(this.slideIndex);
      this.slideItemCount = this.slides().length;
    });
  }

  plusSlides(n: number): void {
    this.showSlides((this.slideIndex += n));
  }

  currentSlide(n: number): void {
    this.showSlides((this.slideIndex = n));
  }

  showSlides(n: number): void {
    let i = 0;
    if (n > this.slides().length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides().length;
    }

    for (i = 0; i < this.slides().length; i++) {
      this.slides()[i].nativeElement.style.display = 'none';
    }

    for (i = 0; i < this.dots().length; i++) {
      this.dots()[i].nativeElement.className = this.dots()[
        i
      ].nativeElement.className.replace(' active', '');
    }

    if (this.slides().length > 0) {
      this.slides()[this.slideIndex - 1].nativeElement.style.display = 'block';
    }

    if (this.dots().length > 0) {
      this.dots()[this.slideIndex - 1].nativeElement.className += ' active';
    }
  }
}
