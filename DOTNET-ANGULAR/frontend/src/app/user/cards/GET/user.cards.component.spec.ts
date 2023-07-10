import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardsComponent } from './user.cards';

describe('UserCardsComponent', () => {
  let component: UserCardsComponent;
  let fixture: ComponentFixture<UserCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCardsComponent]
    });
    fixture = TestBed.createComponent(UserCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
