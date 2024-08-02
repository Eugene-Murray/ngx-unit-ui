import {
  Component,
  effect,
  ElementRef,
  OnInit,
  viewChildren,
} from '@angular/core';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss',
})
export class SlideshowComponent implements OnInit {
  slideIndex = 1;

  private slides = viewChildren<ElementRef>('slideItem');
  private dots = viewChildren<ElementRef>('dot');

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }

  constructor() {
    effect(() => {
      this.showSlides(this.slideIndex);
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
      this.dots()[i].nativeElement.className = this.dots()[i]
        .nativeElement.className.replace(' active', '');
    }

    if (this.slides().length > 0) {
      this.slides()[this.slideIndex - 1].nativeElement.style.display = 'block';
    }

    if (this.dots().length > 0) {
      
      this.dots()[this.slideIndex - 1].nativeElement.className += ' active';
    }
  }
}
