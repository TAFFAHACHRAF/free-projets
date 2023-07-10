import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSocialComponent } from './update.social';

describe('UpdateSocialComponent', () => {
  let component: UpdateSocialComponent;
  let fixture: ComponentFixture<UpdateSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSocialComponent]
    });
    fixture = TestBed.createComponent(UpdateSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
