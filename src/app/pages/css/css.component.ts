import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-css',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './css.component.html',
  styleUrl: './css.component.scss'
})
export class CssComponent {

}
