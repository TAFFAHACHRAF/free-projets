import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  loginData = {
    email: '',
    password: '',
  };
  
  constructor(private http: HttpClient, private router: Router) { }

  validate() {
    // Existing code
    
    this.http.post<any>('http://localhost:8082/inscription/login', this.loginData).subscribe(
      (response) => {
        if (response.accessToken) {
          // Login successful, access token received
          const userDTO = response.userDTO;
          console.log(userDTO);
          console.log(response.accessToken);
          alert("Authenticated successfully");

          // Store the access token in local storage
          localStorage.setItem('accessToken', response.accessToken);

          // Redirect to '/admin' page
          this.router.navigate(['accueil']);
        } else {
          // Handle login error
          console.log('Login failed');
        }
      },
      (error) => {
        // Handle HTTP error
        console.log('An error occurred:', error);
      }
    );
  }
}