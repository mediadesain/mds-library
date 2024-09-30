import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFilterRangePipeComponent } from './demo-filter-range-pipe.component';

describe('DemoFilterRangePipeComponent', () => {
  let component: DemoFilterRangePipeComponent;
  let fixture: ComponentFixture<DemoFilterRangePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DemoFilterRangePipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoFilterRangePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
