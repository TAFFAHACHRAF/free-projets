import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {
  selectedGender: string = '';
  firstName: string = '';
  lastName: string = '';
  dateOfBirth: string = '';

  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}

  goToNextPage() {
    // Pass the selected gender, first name, last name, and date of birth as parameters to the next page
    const queryParams = {
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      gender: this.selectedGender
    };
    this.router.navigate(['/email'], { queryParams });
  }

  goToPreviousPage() {
    this.location.back();
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.firstName = params['firstName'];
      this.lastName = params['lastName'];
      this.dateOfBirth = params['dateOfBirth'];
    });
  }
}
