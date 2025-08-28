import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermGameCard } from './term-game-card';

describe('TermGameCard', () => {
  let component: TermGameCard;
  let fixture: ComponentFixture<TermGameCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermGameCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermGameCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
