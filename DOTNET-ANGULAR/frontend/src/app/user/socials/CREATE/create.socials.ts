import { Component, OnInit } from '@angular/core';
import { AccountDTO } from 'src/app/_interfaces/AccountDTO';
import { CardDTO } from 'src/app/_interfaces/CardDTO';
import { SocialDTO } from 'src/app/_interfaces/SocialDTO';
import { AccountService } from 'src/app/_services/account';
import { CardSevice } from 'src/app/_services/card';
import { SocialSevice } from 'src/app/_services/social';

@Component({
  selector: 'app-create-card',
  templateUrl: './create.socials.component.html',
  styleUrls: ['./create.socials.component.css']
})
export class CreateSocialComponent implements OnInit {
  public newSocial: SocialDTO = { id: '', socialPlatform: 0, socialUrl: '',profileId:''};
  private profileId: string = '';
  // id: string,
  // socialPlatform: number;
  // socialUrl: string;
  // profileId: string;
  constructor(
    private socialSevice: SocialSevice,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.getAccount();
  }

  saveNewSocial(): void {
    console.log(this.newSocial);
    this.socialSevice.postSocial(this.newSocial).subscribe(
      (response: SocialDTO) => {
        console.log('New social saved:', response);
        alert('Social saved successfully.');
        this.resetNewCardForm();
      },
      (error: any) => {
        alert('Failed to save card.');
        console.error('Failed to save new card:', error);
      }
    );
  }

  resetNewCardForm(): void {
    this.newSocial = { id: '', socialPlatform: 0, socialUrl: '',profileId:''};
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
          this.newSocial.profileId = this.profileId;
        }
      },
      (error: any) => {
        alert('Failed to get account.');
        console.error('Failed to get account:', error);
      }
    );
  }
}
