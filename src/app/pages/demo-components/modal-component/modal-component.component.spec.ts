import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoFilterPipeComponent } from '../../demo-pipe/demo-filter-pipe/demo-filter-pipe.component';

describe('DemoFilterPipeComponent', () => {
  let component: DemoFilterPipeComponent;
  let fixture: ComponentFixture<DemoFilterPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFilterPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoFilterPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
