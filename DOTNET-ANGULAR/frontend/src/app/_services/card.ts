import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environment/environment';
import { AccountDTO } from '../_interfaces/AccountDTO';
import { CardDTO } from '../_interfaces/CardDTO';

@Injectable({
  providedIn: 'root'
})
export class CardSevice {
  url: string;

  constructor(private http: HttpClient) {
    this.url = "https://localhost:7058/api";
  }

  public getAllCards(): Observable<Array<CardDTO>> {
    let newUrl = this.url + '/Card/GetAllCards';
    return this.http.get<Array<CardDTO>>(newUrl);
  }

  public getCardById(id:string): Observable<CardDTO> {
    let newUrl = this.url + '/Card/GetCardById/'+id;
    return this.http.get<CardDTO>(newUrl);
  }

  public postCard(card: CardDTO): Observable<CardDTO> {
    const postedCard={isActive: card.isActive, profileId: card.profileId}
    let newUrl = this.url + '/Card/CreateCard';
    console.log(postedCard)
    return this.http.post<CardDTO>(newUrl, postedCard);
  }

  deleteCard(id: string): Observable<void> {
    let newUrl = this.url + '/Card/DeleteCard';
    return this.http.delete<void>(`${newUrl}/${id}`);
  }

  public updateCard(card: CardDTO, id : string): Observable<CardDTO> {
    let newUrl = this.url + '/Card/UpdateCard/'+id;
    return this.http.put<CardDTO>(newUrl, card);
  }
  // Rest of the code...
}
