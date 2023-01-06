import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingFilterComponent } from './rating-filter.component';

describe('RatingFilterComponent', () => {
  let component: RatingFilterComponent;
  let fixture: ComponentFixture<RatingFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
