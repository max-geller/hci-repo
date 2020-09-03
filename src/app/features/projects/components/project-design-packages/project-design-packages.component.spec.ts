import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDesignPackagesComponent } from './project-design-packages.component';

describe('ProjectDesignPackagesComponent', () => {
  let component: ProjectDesignPackagesComponent;
  let fixture: ComponentFixture<ProjectDesignPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDesignPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDesignPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
