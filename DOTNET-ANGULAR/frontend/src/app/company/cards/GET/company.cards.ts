import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account';
import { CardSevice } from 'src/app/_services/card';

@Component({
  selector: 'app-c-cards',
  templateUrl: './company.cards.component.html',
  styleUrls: ['./company.cards.component.css']
})
export class CompanyCardsComponent implements OnInit {
  public cardsData: any; // Placeholder for the account data

  constructor(private cardService: CardSevice) {
  }

  ngOnInit(): void {
    this.loadAccountData();
  }

  loadAccountData(): void {
    this.cardService.getAllCards().subscribe(
      (data) => {
        this.cardsData = data;
        console.log(data)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteCard(id : string): void {
    this.cardService.deleteCard(id).subscribe(
      (data) => {
        console.log(data)
        this.cardsData = this.cardsData.filter((card: any) => card.id !== id);
        alert("deleted with success")
      },
      (error) => {
        console.error(error);
        alert("cannot delete this card")
      }
    );
  }
}
