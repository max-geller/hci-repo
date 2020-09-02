import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexChartsComponent } from './index-charts.component';

describe('IndexChartsComponent', () => {
  let component: IndexChartsComponent;
  let fixture: ComponentFixture<IndexChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
