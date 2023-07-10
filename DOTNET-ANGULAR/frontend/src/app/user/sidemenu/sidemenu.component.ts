import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit{
  constructor(private authService : AuthService){
    
  }
  
  logout(): void{
    this.authService.logout()
  }

  ngOnInit(): void {
    
  }
}


