import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsProfileComponent } from './actions-profile.component';

describe('ActionsProfileComponent', () => {
  let component: ActionsProfileComponent;
  let fixture: ComponentFixture<ActionsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
