import { Component, OnInit } from '@angular/core';
import { CardDTO } from 'src/app/_interfaces/CardDTO';
import { CardSevice } from 'src/app/_services/card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-cards',
  templateUrl: './update.cards.component.html',
  styleUrls: ['./update.cards.component.css']
})
export class UpdateCardsComponent implements OnInit {
  public updatedCard: CardDTO = { id:'', isActive: false, profileId: '' };
  public cardId!: string; // Variable to store the card ID

  constructor(private cardService: CardSevice, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.cardId = this.extractCardIdFromUrl();
    this.loadCardData();
  }

  updateCard(): void {
    console.log(this.updatedCard);
    this.cardService.updateCard(this.updatedCard, this.cardId).subscribe(
      (response: CardDTO) => {
        alert('Card updated with success');
        this.resetUpdateCardForm();
      },
      (error) => {
        alert('Failed to update card');
        console.error('Failed to update card:', error);
      }
    );
  }

  loadCardData(): void {
    this.cardService.getCardById(this.cardId).subscribe(
      (data: CardDTO) => {
        this.updatedCard = { ...data }; // Populate the updatedCard object with the card data
      },
      (error) => {
        console.error(error);
      }
    );
  }

  resetUpdateCardForm(): void {
   // this.updatedCard = { id: 0, isActive: false, profileId: '' };
  }

  private extractCardIdFromUrl(): string {
    const urlSegments = this.route.snapshot.url;
    return urlSegments[urlSegments.length - 1].path;
  }
  
}
