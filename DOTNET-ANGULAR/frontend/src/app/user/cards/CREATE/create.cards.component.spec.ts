import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardComponent } from './create.cards';

describe('CreateCardComponent', () => {
  let component: CreateCardComponent;
  let fixture: ComponentFixture<CreateCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCardComponent]
    });
    fixture = TestBed.createComponent(CreateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
