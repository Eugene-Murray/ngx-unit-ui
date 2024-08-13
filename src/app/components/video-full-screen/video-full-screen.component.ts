import { Component, ElementRef, input, viewChild } from '@angular/core';

@Component({
  selector: 'ngx-unit-video-full-screen',
  standalone: true,
  imports: [],
  templateUrl: './video-full-screen.component.html',
  styleUrl: './video-full-screen.component.scss'
})
export class VideoFullScreenComponent {
  videoSrc = input<string>();
  videoType = input<string>();
  videoTitle = input<string>();
  videoDescription = input<string>();
  btnLabel = 'Pause';

  private video = viewChild<ElementRef>('video') ;

  onPause(): void {
    if (this.video()?.nativeElement.paused) {
      this.video()?.nativeElement.play();
      this.btnLabel = 'Pause';
    } else {
      this.video()?.nativeElement.pause();
      this.btnLabel = 'Play';
    }
  }
}
