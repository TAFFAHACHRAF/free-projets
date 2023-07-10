import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {
  firstName: string = '';
  lastName: string = '';
  dateOfBirth: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.firstName = params['firstName'];
      this.lastName = params['lastName'];
    });
  }

  goToPreviousPage() {
    this.router.navigate(['/name']);
  }

  goToNextPage(dateOfBirth: string) {
    // Pass the first name, last name, and date of birth as parameters to the next page
    this.router.navigate(['/gender'], {
      queryParams: {
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: dateOfBirth
      }
    });
  }
}
