import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Savingaccount } from './savingaccount';

describe('Savingaccount', () => {
  let component: Savingaccount;
  let fixture: ComponentFixture<Savingaccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Savingaccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Savingaccount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
