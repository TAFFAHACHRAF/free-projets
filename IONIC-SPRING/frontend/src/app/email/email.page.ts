import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {
  firstName!: string;
  lastName!: string;
  dateOfBirth!: string;
  email!: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.firstName = params['firstName'];
      this.lastName = params['lastName'];
      this.dateOfBirth = params['dateOfBirth'];
    });
  }

  goToNextPage() {
    // Pass the captured email, first name, last name, and date of birth as parameters to the next page
    const queryParams= {
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      email: this.email,
    }
    this.router.navigate(['/password'], {
      queryParams
    });
  }
}
