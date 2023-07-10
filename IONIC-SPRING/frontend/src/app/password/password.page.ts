import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  firstName!: string;
  lastName!: string;
  dateOfBirth!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.firstName = params['firstName'];
      this.lastName = params['lastName'];
      this.dateOfBirth = params['dateOfBirth'];
      this.email = params['email'];
    });
  }

  goToNextPage() {
    // Perform password validation
    if (this.password === this.confirmPassword) {
      // Passwords match, navigate to the next page
      this.router.navigate(['/save-login'], {
        queryParams: {
          firstName: this.firstName,
          lastName: this.lastName,
          dateOfBirth: this.dateOfBirth,
          email: this.email,
          password: this.password,
        },
      });
    } else {
      // Passwords do not match, display an error message or handle accordingly
      alert('Passwords do not match');
    }
  }
}
