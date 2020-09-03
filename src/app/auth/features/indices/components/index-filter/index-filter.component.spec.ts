import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFilterComponent } from './index-filter.component';

describe('IndexFilterComponent', () => {
  let component: IndexFilterComponent;
  let fixture: ComponentFixture<IndexFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
