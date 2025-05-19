import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-unit-custom-css-classes',
    imports: [CommonModule],
    templateUrl: './custom-css-classes.component.html',
    styleUrl: './custom-css-classes.component.scss'
})
export class CustomCssClassesComponent {
  @Input() customClasses: string = '';
}
