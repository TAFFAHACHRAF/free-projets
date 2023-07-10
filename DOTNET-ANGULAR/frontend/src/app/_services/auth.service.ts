import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';
import { Logins } from '../_interfaces/Logins';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.backendHost+"/Login/login"

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials : Logins){
    return this.http.post(this.url,credentials);
  }
  
  logout() {
    localStorage.removeItem('userData');
    localStorage.removeItem('expirationTime');
    this.router.navigate(['../']);
  }
}
