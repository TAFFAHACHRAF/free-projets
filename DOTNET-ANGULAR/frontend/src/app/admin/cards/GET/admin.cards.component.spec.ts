import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCardsComponent } from './admin.cards';

describe('AdminCardsComponent', () => {
  let component: AdminCardsComponent;
  let fixture: ComponentFixture<AdminCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCardsComponent]
    });
    fixture = TestBed.createComponent(AdminCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
