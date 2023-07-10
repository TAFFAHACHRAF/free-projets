import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaveLoginPage } from './save-login.page';

describe('SaveLoginPage', () => {
  let component: SaveLoginPage;
  let fixture: ComponentFixture<SaveLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SaveLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
