import { Component, OnInit } from '@angular/core';
import { AccountDTO } from 'src/app/_interfaces/AccountDTO';
import { CardDTO } from 'src/app/_interfaces/CardDTO';
import { AccountService } from 'src/app/_services/account';
import { CardSevice } from 'src/app/_services/card';

@Component({
  selector: 'app-create-card',
  templateUrl: './create.cards.component.html',
  styleUrls: ['./create.cards.component.css']
})
export class CreateCardComponent implements OnInit {
  public newCard: CardDTO = { id: '', isActive: false, profileId: '' };
  private profileId: string = '';

  constructor(
    private cardService: CardSevice,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.getAccount();
  }

  saveNewCard(): void {
    console.log(this.newCard);
    this.cardService.postCard(this.newCard).subscribe(
      (response: CardDTO) => {
        console.log('New card saved:', response);
        alert('Card saved successfully.');
        this.resetNewCardForm();
      },
      (error: any) => {
        alert('Failed to save card.');
        console.error('Failed to save new card:', error);
      }
    );
  }

  resetNewCardForm(): void {
    this.newCard = { id: '', isActive: false, profileId: '' };
  }

  getAccount(): void {
    const userJson = localStorage.getItem('userData');
    let userId = '';

    if (userJson) {
      const user = JSON.parse(userJson);
      userId = user.id; // Extract the id from the parsed user object
    }

    this.accountService.getAccountById(userId).subscribe(
      (response: AccountDTO) => {
        console.log('Account:', response);
        if (response.profiles && response.profiles.length > 0) {
          this.profileId = response.profiles[0].id;
          this.newCard.profileId = this.profileId;
        }
      },
      (error: any) => {
        alert('Failed to get account.');
        console.error('Failed to get account:', error);
      }
    );
  }
}
