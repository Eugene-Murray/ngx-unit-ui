import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSccComponent } from './custom-scc.component';

describe('CustomSccComponent', () => {
  let component: CustomSccComponent;
  let fixture: ComponentFixture<CustomSccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSccComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
