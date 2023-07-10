import { Component, OnInit } from '@angular/core';
import { UserSevice } from 'src/app/_services/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: any; // Placeholder for the account data

  constructor(private userService: UserSevice) {
  }

  ngOnInit(): void {
    this.loadAccountData();
  }

  loadAccountData(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
        console.log(this.users)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteUser(id : string): void {
    this.userService.deleteUser(id).subscribe(
      (data) => {
        console.log(data)
        this.users = this.users.filter((card: any) => card.id !== id);
        alert("deleted with success")
      },
      (error) => {
        console.error(error);
        alert("cannot delete this user")
      }
    );
  }
}
