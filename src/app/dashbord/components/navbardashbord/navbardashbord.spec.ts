import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbardashbord } from './navbardashbord';

describe('Navbardashbord', () => {
  let component: Navbardashbord;
  let fixture: ComponentFixture<Navbardashbord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Navbardashbord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbardashbord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
