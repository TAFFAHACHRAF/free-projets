import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCreateCardComponent } from './company.create.cards';

describe('CompanyCreateCardComponent', () => {
  let component: CompanyCreateCardComponent;
  let fixture: ComponentFixture<CompanyCreateCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyCreateCardComponent]
    });
    fixture = TestBed.createComponent(CompanyCreateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
