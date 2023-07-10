import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NamePage } from './name.page';

describe('NamePage', () => {
  let component: NamePage;
  let fixture: ComponentFixture<NamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
