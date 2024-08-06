import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilityService } from '../reusable/shared/utility.service';
import { SessionService } from '../reusable/shared/session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {

  constructor(
    public _sessionService: SessionService, 
    public router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {

    var valid = this._sessionService.validateSession();
    
    if(valid) return true;

    this._sessionService.disposeSession();
    this.router.navigate(['login']);

    return false;
  }


}