import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShowGalleryComponent } from './image-slideshow-gallery.component';

describe('SlideshowGalleryComponent', () => {
  let component: SlideShowGalleryComponent;
  let fixture: ComponentFixture<SlideShowGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideShowGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideShowGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
