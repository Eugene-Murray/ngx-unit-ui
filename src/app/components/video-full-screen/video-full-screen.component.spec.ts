import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFullScreenComponent } from './video-full-screen.component';

describe('VideoFullScreenComponent', () => {
  let component: VideoFullScreenComponent;
  let fixture: ComponentFixture<VideoFullScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoFullScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
