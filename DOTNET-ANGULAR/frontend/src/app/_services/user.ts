import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../_interfaces/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class UserSevice {
  url: string;

  constructor(private http: HttpClient) {
    this.url = "https://localhost:7058/api";
  }

  public getAllUsers(): Observable<Array<UserDTO>> {
    let newUrl = this.url + '/User/Get';
    return this.http.get<Array<UserDTO>>(newUrl);
  }

  public getUserById(id:string): Observable<UserDTO> {
    let newUrl = this.url + '/User/GetUserById/'+id;
    return this.http.get<UserDTO>(newUrl);
  }

  public postUser(User: UserDTO): Observable<UserDTO> {
    // const postedCard={isActive: User.isActive, profileId: User.profileId}
    let newUrl = this.url + '/User/Post';
    console.log(User)
    return this.http.post<UserDTO>(newUrl, User);
  }

  deleteUser(id: string): Observable<void> {
    let newUrl = this.url + '/User/Delete';
    return this.http.delete<void>(`${newUrl}/${id}`);
  }

  public updateUser(User: UserDTO, id : string): Observable<UserDTO> {
    let newUrl = this.url + '/User/UpdateUser/'+id;
    return this.http.put<UserDTO>(newUrl, User);
  }
  // Rest of the code...
}
