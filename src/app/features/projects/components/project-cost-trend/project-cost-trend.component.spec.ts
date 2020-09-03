import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCostTrendComponent } from './project-cost-trend.component';

describe('ProjectCostTrendComponent', () => {
  let component: ProjectCostTrendComponent;
  let fixture: ComponentFixture<ProjectCostTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCostTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCostTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
