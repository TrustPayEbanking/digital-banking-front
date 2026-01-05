import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisClient } from './avis-client';

describe('AvisClient', () => {
  let component: AvisClient;
  let fixture: ComponentFixture<AvisClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvisClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisClient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
