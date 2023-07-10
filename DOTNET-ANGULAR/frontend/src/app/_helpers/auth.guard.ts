import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userData = localStorage.getItem('userData');
    const expirationTime = localStorage.getItem('expirationTime');

    if (userData && expirationTime) {
      const currentTime = new Date().getTime();
      if (currentTime < Number(expirationTime)) {
        return true;
      }
    }

    return this.router.parseUrl('/auth');
  }
}
