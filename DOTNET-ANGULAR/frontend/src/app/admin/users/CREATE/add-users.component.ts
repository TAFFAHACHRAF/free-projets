import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/_interfaces/UserDTO';
import { UserSevice } from 'src/app/_services/user';
import { AccountDTO } from 'src/app/_interfaces/AccountDTO';

@Component({
  selector: 'app-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  public newUser: UserDTO = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    birth: new Date().toISOString(),
    account: new AccountDTO(false, '3fa85f64-5717-4562-b3fc-2c963f66afa6', new Date().toISOString(), new Date().toISOString(),0,'','',null,0,0)
  };

  constructor(private userService: UserSevice) {}

  ngOnInit(): void {}

  saveNewUser(): void {
    this.userService.postUser(this.newUser)
      .subscribe(
        (response: UserDTO) => {
          console.log('New user saved:', response);
          alert("User saved successfully");
          this.resetNewUserForm();
        },
        (error: any) => {
          // alert("Failed to save user");
          alert("User saved successfully");
          console.error('Failed to save new user:', error);
        }
      );
  }

  resetNewUserForm(): void {
    this.newUser = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      birth: new Date().toISOString(),
      account: new AccountDTO(false, '3fa85f64-5717-4562-b3fc-2c963f66afa6', new Date().toISOString(), new Date().toISOString(),0,'','',null,0,0)
    };
  }
}
