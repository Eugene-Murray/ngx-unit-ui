import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveImageGridComponent } from './image-responsive-grid.component';

describe('ResponsiveImageGridComponent', () => {
  let component: ResponsiveImageGridComponent;
  let fixture: ComponentFixture<ResponsiveImageGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveImageGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveImageGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
