import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company.profile.component.html',
  styleUrls: ['./company.profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  public newUser: any = {}; // Placeholder for the new card data

  constructor() {
  }

  
  ngOnInit(): void {
  }

 
  saveNewUser(): void {
    // this.cardService.createCard(this.newCard).subscribe(
    //   (data) => {
    //     // Card successfully created
    //     console.log(data);
    //     this.resetNewCardForm();
    //     // Reload account data to update the card list
    //     this.loadAccountData();
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
  }

  resetNewUserForm(): void {
    this.newUser = {
      id: '',
      accountType : null,
      mail: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      role: '',
    };
  }
}
