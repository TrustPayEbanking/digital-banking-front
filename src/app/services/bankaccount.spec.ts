import { TestBed } from '@angular/core/testing';

import { Bankaccount } from './bankaccount';

describe('Bankaccount', () => {
  let service: Bankaccount;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bankaccount);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
