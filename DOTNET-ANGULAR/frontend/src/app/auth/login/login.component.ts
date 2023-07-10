import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Logins } from 'src/app/_interfaces/Logins';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: Logins = {
    mail: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.form);
    this.authService.login(this.form).subscribe(
      data => {
        console.log(data);
        // Store data in local storage
        localStorage.setItem('userData', JSON.stringify(data));

        // Set expiration time to 30 minutes (in milliseconds)
        const expirationTime = new Date().getTime() + 30 * 60 * 1000;
        localStorage.setItem('expirationTime', expirationTime.toString());

        const userString = localStorage.getItem('userData');
        if (userString) {
          const user = JSON.parse(userString);
          const accountType = user.accountType;
          // Redirect based on accountType
          if (accountType === 0) {
            this.router.navigate(['/user']);
          } else if (accountType === 1) {
            this.router.navigate(['/company']);
          } else if (accountType === 2) {
            this.router.navigate(['/admin']);
          } else {
            // Redirect to a default page if accountType is not recognized
            this.router.navigate(['/auth']);
          }
        }
      },
      err => {
        console.log(err);
        alert("Email or password is incorrect");
      }
    );
  }
}
