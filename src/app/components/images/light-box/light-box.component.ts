import { Component, effect, ElementRef, input, viewChild, viewChildren } from '@angular/core';

@Component({
  selector: 'app-light-box',
  standalone: true,
  imports: [],
  templateUrl: './light-box.component.html',
  styleUrl: './light-box.component.scss'
})
export class LightBoxComponent {
  images = input<string[]>();
  slideIndex = 1;
  slideItemCount = 0;

  private slides = viewChildren<ElementRef>('slideItem');
  private dots = viewChildren<ElementRef>('dot');
  private modal = viewChild<ElementRef>('modal') ;

  constructor() {
    effect(() => {
      this.showSlides(this.slideIndex);
      this.slideItemCount = this.slides().length;
      
    });
  }

  plusSlides(slideIndex: number): void {
    console.log('plusSlides', slideIndex);
    this.slideIndex += slideIndex;
    this.showSlides(slideIndex);
  }
  
  currentSlide(slideIndex: number) {
    console.log('currentSlide', slideIndex);
    this.slideIndex = slideIndex;
    this.showSlides(slideIndex);
  }

  openModal(slideIndex: number): void {
    const modal: HTMLDivElement = this.modal()?.nativeElement;
    if (modal) {
      modal.style.display = 'block';
    }
    this.currentSlide(slideIndex);
  }

  closeModal(): void {
    const modal: HTMLDivElement = this.modal()?.nativeElement;
    if (modal) {
      modal.style.display = 'none';
    }
  }

  private showSlides(slideIndex: number): void {
    console.log('showSlides', slideIndex);
    if (slideIndex > this.slides.length) {
      this.slideIndex = 1;
    }

    if (slideIndex < 1) {
      this.slideIndex = this.slides.length;
    }

    for (let i = 0; i < this.slides.length; i++) {
        this.slides()[i].nativeElement.style.display = 'none';
    }
    for (let i = 0; i < this.dots.length; i++) {
        this.dots()[i].nativeElement.className = this.dots()[i].nativeElement.className.replace(' active', '');
    }

    this.slides()[this.slideIndex-1].nativeElement.style.display = 'block';
    this.dots()[this.slideIndex-1].nativeElement.className += ' active';
    // captionText.innerHTML = dots[slideIndex-1].alt;

    console.log('showSlides', this.slides()[slideIndex-1].nativeElement);
  }
}
