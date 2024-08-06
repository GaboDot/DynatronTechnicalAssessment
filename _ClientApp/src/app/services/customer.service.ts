import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../interfaces/response-api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private urlApi: string = environment.endpoint + 'Customer/';

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.urlApi}GetCustomers`);
  }
}
