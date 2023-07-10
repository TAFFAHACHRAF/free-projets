import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Forgot1Page } from './forgot1.page';

describe('Forgot1Page', () => {
  let component: Forgot1Page;
  let fixture: ComponentFixture<Forgot1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Forgot1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
