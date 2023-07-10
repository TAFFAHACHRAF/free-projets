import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Forgot2Page } from './forgot2.page';

describe('Forgot2Page', () => {
  let component: Forgot2Page;
  let fixture: ComponentFixture<Forgot2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Forgot2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
