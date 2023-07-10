import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account';
import { SocialSevice } from 'src/app/_services/social';

@Component({
  selector: 'app-cards',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {
  public accountData: any; // Placeholder for the account data
  public userId!: string | '';

  constructor(private accountService: AccountService,
    private socialService:SocialSevice) {
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

  deleteSocial(id:string): void {
    this.socialService.deleteSocial(id).subscribe(
      (data) => {
          this.accountData.profiles[0].socials = this.accountData.profiles[0].socials.filter((social: any) => social.id !== id);
          alert("card deleted with success");
      },
      (error) => {
        alert("card cannot deleted");
      }
    );
  }
}
