import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateUsersComponent } from './update-users.component';


describe('UpdateUsersComponent', () => {
  let component: UpdateUsersComponent;
  let fixture: ComponentFixture<UpdateUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUsersComponent]
    });
    fixture = TestBed.createComponent(UpdateUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
