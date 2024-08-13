import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageResponsiveGridComponent } from './image-responsive-grid.component';

describe('ImageResponsiveGridComponent', () => {
  let component: ImageResponsiveGridComponent;
  let fixture: ComponentFixture<ImageResponsiveGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageResponsiveGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageResponsiveGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
