import { CommonModule } from '@angular/common';
import { Component, effect, ElementRef, input, Signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.scss'
})
export class ImageModalComponent {
  imageSrc = input<string>();
  imageTitle = input<string>();
  
  private modal = viewChild<ElementRef>('modal') ;

  constructor() {
    effect(() => {
      
    });
  }

  onOpen(): void {
    const modal: HTMLDivElement = this.modal()?.nativeElement;
    if (modal) {
      modal.style.display = 'block';
    }
  } 

  onClose(): void {
    const modal: HTMLDivElement = this.modal()?.nativeElement;
    if (modal) {
      modal.style.display = 'none';
    }
  } 
}
