import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCardsComponent } from './update.cards';

describe('UpdateCardsComponent', () => {
  let component: UpdateCardsComponent;
  let fixture: ComponentFixture<UpdateCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCardsComponent]
    });
    fixture = TestBed.createComponent(UpdateCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
