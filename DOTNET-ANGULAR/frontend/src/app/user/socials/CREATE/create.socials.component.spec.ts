import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSocialComponent } from './create.socials';

describe('CreateSocialComponent', () => {
  let component: CreateSocialComponent;
  let fixture: ComponentFixture<CreateSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSocialComponent]
    });
    fixture = TestBed.createComponent(CreateSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
