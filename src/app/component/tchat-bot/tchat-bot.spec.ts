import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchatBot } from './tchat-bot';

describe('TchatBot', () => {
  let component: TchatBot;
  let fixture: ComponentFixture<TchatBot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TchatBot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TchatBot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
