import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  password: string = '';
  confirmPassword: string = '';
  email: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.email = params['email'];
    });
  }
  passwordChanged(){
    alert("password changed with success, verify your email")
  }
  goToNextPage() {
    // Perform password validation
    if (this.password === this.confirmPassword) {
      const requestBody = {
        email: this.email,
        newPassword: this.password,
        confirmPassword: this.confirmPassword
      };

      // Send POST request to the API
      this.http.post('http://localhost:8082/inscription/motdepasseoublie', requestBody)
        .subscribe(
          (response) => {
            // Handle successful response here
            alert('Password change successful');
            // Optionally, navigate to the next page
            // this.router.navigate(['/next-page']);
          },
          (error) => {
            // Handle error here
            console.error('Password change error:', error);
            // Display an error message or handle accordingly
            // alert('Failed to change password');
          }
        );
    } else {
      // Passwords do not match, display an error message or handle accordingly
      alert('Passwords do not match');
    }
  }
}
