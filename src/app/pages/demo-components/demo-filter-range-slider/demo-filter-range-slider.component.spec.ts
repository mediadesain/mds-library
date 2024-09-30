import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFilterFilterRangeSliderComponent } from './demo-filter-range-slider.component';

describe('DemoFilterFilterRangeSliderComponent', () => {
  let component: DemoFilterFilterRangeSliderComponent;
  let fixture: ComponentFixture<DemoFilterFilterRangeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DemoFilterFilterRangeSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoFilterFilterRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
