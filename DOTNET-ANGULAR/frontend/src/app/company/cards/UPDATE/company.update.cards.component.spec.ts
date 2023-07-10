import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyUpdateCardsComponent } from './company.update.cards';

describe('CompanyUpdateCardsComponent', () => {
  let component: CompanyUpdateCardsComponent;
  let fixture: ComponentFixture<CompanyUpdateCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyUpdateCardsComponent]
    });
    fixture = TestBed.createComponent(CompanyUpdateCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
