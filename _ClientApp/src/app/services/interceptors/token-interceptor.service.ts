import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { SessionService } from 'src/app/reusable/shared/session.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _sessionService: SessionService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {

    const token = this._sessionService.getUserToken();

    const authReq = request.clone({
      setHeaders: { 'Authorization': `Bearer ${token}` }
    });
    
    return next.handle(authReq);
  }
}
