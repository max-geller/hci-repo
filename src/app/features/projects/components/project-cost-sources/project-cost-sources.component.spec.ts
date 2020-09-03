import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCostSourcesComponent } from './project-cost-sources.component';

describe('ProjectCostSourcesComponent', () => {
  let component: ProjectCostSourcesComponent;
  let fixture: ComponentFixture<ProjectCostSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCostSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCostSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
