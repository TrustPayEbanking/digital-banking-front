import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChosse } from './why-chosse';

describe('WhyChosse', () => {
  let component: WhyChosse;
  let fixture: ComponentFixture<WhyChosse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyChosse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyChosse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
