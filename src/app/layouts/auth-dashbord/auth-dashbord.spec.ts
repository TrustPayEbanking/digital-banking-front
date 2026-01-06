import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDashbord } from './auth-dashbord';

describe('AuthDashbord', () => {
  let component: AuthDashbord;
  let fixture: ComponentFixture<AuthDashbord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthDashbord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthDashbord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
