import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../interfaces/response-api';
import { Login } from '../interfaces/login';


@Injectable({
  providedIn: 'root'
})
export class UserService {

    usuario: Usuario;

    private urlApi: string = environment.endpoint + 'User/';

    constructor(private http: HttpClient) { }

    Login(request: Login):Observable<ResponseApi> {
        return this.http.post<ResponseApi>(`${this.urlApi}Authenticate`, request);
      }
}