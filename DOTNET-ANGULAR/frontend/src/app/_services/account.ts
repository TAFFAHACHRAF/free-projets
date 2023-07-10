import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environment/environment';
import { AccountDTO } from '../_interfaces/AccountDTO';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.backendHost;
  }

  public getAccountById(id:string): Observable<AccountDTO> {
    let newUrl = this.url + '/Get/' + id;
    return this.http.get<AccountDTO>(newUrl);
  }

  public getAllAccounts(): Observable<Array<AccountDTO>> {
    let newUrl = this.url + '/Get';
    return this.http.get<Array<AccountDTO>>(newUrl);
  }

  // Rest of the code...
}
