import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-name',
  templateUrl: './name.page.html',
  styleUrls: ['./name.page.scss'],
})
export class NamePage implements OnInit {
  firstName!: string;
  lastName!: string;

  constructor(private router: Router, private location: Location) {}

  goToNextPage(firstName: string, lastName: string) {
    this.router.navigate(['/home1', firstName, lastName]);
  }
  

  goToPreviousPage() {
    this.location.back();
  }

  ngOnInit() {}
}
