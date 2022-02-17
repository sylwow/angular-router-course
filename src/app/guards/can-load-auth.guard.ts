import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { AuthStore } from '../services/auth.store';

@Injectable({
  providedIn: 'root'
})
export class CanLoadAuthGuard implements CanLoad {

  constructor(
    private router: Router,
    private authService: AuthStore
  ) { }


  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.chechIfAuthenticated();
  }

  private chechIfAuthenticated(): Observable<boolean | UrlTree> {
    return this.authService.isLoggedIn$.pipe(
      first(),
      map(isLoggedIn => isLoggedIn ? true : this.router.parseUrl('/login'))
    );
  }
}
