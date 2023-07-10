import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialDTO } from 'src/app/_interfaces/SocialDTO';
import { SocialSevice } from 'src/app/_services/social';

@Component({
  selector: 'app-update-cards',
  templateUrl: './update.social.component.html',
  styleUrls: ['./update.social.component.css']
})
export class UpdateSocialComponent implements OnInit {
  public updatedSocial: SocialDTO = { id: '',socialUrl: '', socialPlatform:0, profileId: '' };
  public socialId!: string; // Variable to store the social ID

  constructor(private socialSevice: SocialSevice, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.socialId = this.extractCardIdFromUrl();
    this.loadCardData();
  }

  updateSocial(): void {
    console.log(this.updatedSocial);
    this.socialSevice.updateSocial(this.updatedSocial, this.socialId).subscribe(
      (response: SocialDTO) => {
        alert('social updated with success');
        this.resetUpdateCardForm();
      },
      (error) => {
        alert('Failed to update social');
        console.error('Failed to update social:', error);
      }
    );
  }

  loadCardData(): void {
    this.socialSevice.getSocialById(this.socialId).subscribe(
      (data: SocialDTO) => {
        this.updatedSocial = { ...data }; // Populate the updatedCard object with the social data
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
