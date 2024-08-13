import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickySocialBarComponent } from './sticky-social-bar.component';

describe('StickySocialBarComponent', () => {
  let component: StickySocialBarComponent;
  let fixture: ComponentFixture<StickySocialBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickySocialBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickySocialBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
