import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeftPanelComponent } from './employee-left-panel.component';

describe('EmployeeLeftPanelComponent', () => {
  let component: EmployeeLeftPanelComponent;
  let fixture: ComponentFixture<EmployeeLeftPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeLeftPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLeftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
