import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home1Page } from './home1.page';

describe('Home1Page', () => {
  let component: Home1Page;
  let fixture: ComponentFixture<Home1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Home1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
