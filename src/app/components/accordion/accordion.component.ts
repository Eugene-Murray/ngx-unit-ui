import { Component, contentChildren, effect, ElementRef, viewChildren } from '@angular/core';

@Component({
  selector: 'ngx-unit-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  private accordions = viewChildren<ElementRef>('accordion');
  items = contentChildren<ElementRef>('accordionItem');

  constructor() {
    effect(() => {
      this.items().forEach((panel) => {
        //panel.nativeElement.style.maxHeight = panel.nativeElement.scrollHeight + 'px';
        console.warn(panel.nativeElement);
      });
      //console.warn(this.items().length);
    });
  }

  click(index: number) {
    this.accordions()[index].nativeElement.classList.toggle('active');
    const panel = this.accordions()[index].nativeElement.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }
}
