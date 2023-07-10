import { Component, OnInit } from '@angular/core';
import { SocialDTO } from 'src/app/_interfaces/SocialDTO';
import { SocialSevice } from 'src/app/_services/social';

@Component({
  selector: 'app-cards',
  templateUrl: './create.social.component.html',
  styleUrls: ['./create.social.component.css']
})
export class CreateSocialComponent implements OnInit {
  public newSocial: SocialDTO = { id: '',socialUrl: '', socialPlatform:0, profileId: '' };

  constructor(private socialSevice: SocialSevice) {}

  ngOnInit(): void {}
  saveNewCard(): void {
    this.socialSevice.postSocial(this.newSocial)
      .subscribe(
        (response: SocialDTO) => {
          console.log('New social saved:', response);
          alert("social saved with success")
          this.resetNewCardForm();
        },
        (error:any) => {
          alert("social is not saved")
          console.error('Failed to save new social:', error);
        }
      );
  }

  resetNewCardForm(): void {
    this.newSocial = { id: '',socialUrl: '', socialPlatform:0, profileId: '' };
  }
}
