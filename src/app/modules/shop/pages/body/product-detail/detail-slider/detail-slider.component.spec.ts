import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSliderComponent } from './detail-slider.component';

describe('DetailSliderComponent', () => {
  let component: DetailSliderComponent;
  let fixture: ComponentFixture<DetailSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
