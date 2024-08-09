import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/interfaces/sesion';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private router: Router
  ) { }

  saveSession(usuarioSesion: Sesion) {
    sessionStorage.setItem('UserSession', JSON.stringify(usuarioSesion));
  }

  getSession() {
    const userData = sessionStorage.getItem('UserSession');
    const user = JSON.parse(userData!);
    return user;
  }

  getUserToken() {
    try {
      const userData = sessionStorage.getItem('UserSession');
      const user = JSON.parse(userData!);
      return user.token;
    }
    catch(e) {
      return '';
    }
  }

  validateSession(): boolean {
    try {
      const userData = JSON.parse(sessionStorage.getItem('UserSession')!);
      return userData.token != null ? true : false;
    }
    catch(e) {
      return false;
    }
  }

  disposeSession() {
    sessionStorage.removeItem('UserSession');
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
