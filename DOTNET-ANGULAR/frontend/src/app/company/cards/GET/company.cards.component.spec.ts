import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCardsComponent } from './company.cards';

describe('CompanyCardsComponent', () => {
  let component: CompanyCardsComponent;
  let fixture: ComponentFixture<CompanyCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyCardsComponent]
    });
    fixture = TestBed.createComponent(CompanyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
