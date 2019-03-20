import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarmobComponent } from './navbarmob.component';

describe('NavbarmobComponent', () => {
  let component: NavbarmobComponent;
  let fixture: ComponentFixture<NavbarmobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarmobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarmobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
