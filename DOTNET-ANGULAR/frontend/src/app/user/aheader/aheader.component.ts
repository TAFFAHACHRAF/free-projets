import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-aheader',
  templateUrl: './aheader.component.html',
  styleUrls: ['./aheader.component.css']
})
export class AheaderComponent {
  constructor(private authService:AuthService){}

  logout(): void{
    this.authService.logout()
  }
}

