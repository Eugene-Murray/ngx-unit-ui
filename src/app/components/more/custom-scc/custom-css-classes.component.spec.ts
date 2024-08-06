import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCssClassesComponent } from './custom-css-classes.component';

describe('CustomSccComponent', () => {
  let component: CustomCssClassesComponent;
  let fixture: ComponentFixture<CustomCssClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCssClassesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCssClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
