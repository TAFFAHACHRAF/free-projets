import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewPasswordPage } from './new-password.page';

describe('NewPasswordPage', () => {
  let component: NewPasswordPage;
  let fixture: ComponentFixture<NewPasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
