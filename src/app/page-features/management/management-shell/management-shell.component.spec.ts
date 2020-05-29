import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementShellComponent } from './management-shell.component';

describe('ManagementShellComponent', () => {
  let component: ManagementShellComponent;
  let fixture: ComponentFixture<ManagementShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
