import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account';
import { SocialSevice } from 'src/app/_services/social';

@Component({
  selector: 'app-cards',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {
  public socialData: any; // Placeholder for the account data

  constructor(private socialSevice: SocialSevice) {
  }

  ngOnInit(): void {
    this.loadAccountData();
  }

  loadAccountData(): void {
    this.socialSevice.getAllSocials().subscribe(
      (data) => {
        this.socialData = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteSocial(id : string): void {
    this.socialSevice.deleteSocial(id).subscribe(
      (data) => {
        console.log(data)
        this.socialData = this.socialData.filter((card: any) => card.id !== id);
        alert("deleted with success")
      },
      (error) => {
        console.error(error);
        alert("cannot delete this card")
      }
    );
  }
}
