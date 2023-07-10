import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account';
import { CardSevice } from 'src/app/_services/card';

@Component({
  selector: 'app-cards',
  templateUrl: './user.cards.component.html',
  styleUrls: ['./user.cards.component.css']
})
export class UserCardsComponent implements OnInit {
  public accountData: any; // Placeholder for the account data
  public userId!: string | '';

  constructor(private accountService: AccountService,
    private cardService:CardSevice) {
  }

  ngOnInit(): void {
    this.accountData = localStorage.getItem('userData');
    this.userId = this.accountData ? JSON.parse(this.accountData).id : null;
    this.loadAccountData();
  }

  loadAccountData(): void {
    this.accountService.getAccountById(this.userId).subscribe(
      (data) => {
        this.accountData = data;
        console.log(this.accountData)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteCard(id:string): void {
    this.cardService.deleteCard(id).subscribe(
      (data) => {
          this.accountData.profiles[0].cards = this.accountData.profiles[0].cards.filter((card: any) => card.id !== id);
          alert("card deleted with success");
      },
      (error) => {
        alert("card cannot deleted");
      }
    );
  }
}
