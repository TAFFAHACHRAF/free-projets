import { Component, OnInit } from '@angular/core';
import { CardDTO } from 'src/app/_interfaces/CardDTO';
import { CardSevice } from 'src/app/_services/card';

@Component({
  selector: 'app-create-card',
  templateUrl: './create.cards.component.html',
  styleUrls: ['./create.cards.component.css']
})
export class CreateCardComponent implements OnInit {
  public newCard: CardDTO = { id: '',isActive: false, profileId: '' };

  constructor(private cardService: CardSevice) {}

  ngOnInit(): void {}
  saveNewCard(): void {
    this.cardService.postCard(this.newCard)
      .subscribe(
        (response: CardDTO) => {
          console.log('New card saved:', response);
          alert("card saved with success")
          this.resetNewCardForm();
        },
        (error:any) => {
          alert("card is not saved")
          console.error('Failed to save new card:', error);
        }
      );
  }

  resetNewCardForm(): void {
    this.newCard = { id:'', isActive: false, profileId: '' };
  }
}
