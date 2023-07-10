import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-save-login',
  templateUrl: './save-login.page.html',
  styleUrls: ['./save-login.page.scss'],
})
export class SaveLoginPage implements OnInit {
  firstName!: string;
  lastName!: string;
  birthday!: string;
  email!: string;
  password!: string;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.firstName = params['firstName'];
      this.lastName = params['lastName'];
      this.birthday = params['dateOfBirth'];
      this.email = params['email'];
      this.password = params['password'];
    });
  }

  saveUserInfo() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      birthday: this.birthday,
      email: this.email,
      password: this.password,
    };

    // Send a POST request to save the user information
    this.http.post('http://localhost:8082/inscription', user).subscribe((response) => {
      // Handle the response if needed
      console.log('User saved:', response);
    });

    // Navigate to the next page after saving the user information
    this.router.navigate(['/verify']);
  }
}
