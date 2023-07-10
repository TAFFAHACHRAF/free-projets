import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot1',
  templateUrl: './forgot1.page.html',
  styleUrls: ['./forgot1.page.scss'],
})
export class Forgot1Page implements OnInit {
  email: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.email = params['email'];
    });
  }

  goToPreviousPage() {
    this.router.navigate(['/']);
  }

  goToNextPage(dateOfBirth: string) {
    // Pass the first name, last name, and date of birth as parameters to the next page
    this.router.navigate(['/changepassword'], {
      queryParams: {
        email: this.email
      }
    });
  }
}
