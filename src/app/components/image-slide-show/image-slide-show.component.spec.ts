import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShowComponent } from './image-slide-show.component';

describe('SlideshowComponent', () => {
  let component: SlideShowComponent;
  let fixture: ComponentFixture<SlideShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
