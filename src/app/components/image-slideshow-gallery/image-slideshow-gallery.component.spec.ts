import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSlideShowGalleryComponent } from './image-slideshow-gallery.component';

describe('ImageSlideShowGalleryComponent', () => {
  let component: ImageSlideShowGalleryComponent;
  let fixture: ComponentFixture<ImageSlideShowGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSlideShowGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSlideShowGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
