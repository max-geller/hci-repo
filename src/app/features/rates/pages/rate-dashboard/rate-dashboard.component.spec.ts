import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateDashboardComponent } from './rate-dashboard.component';

describe('RateDashboardComponent', () => {
  let component: RateDashboardComponent;
  let fixture: ComponentFixture<RateDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
