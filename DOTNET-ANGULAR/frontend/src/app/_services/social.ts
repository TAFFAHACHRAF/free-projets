import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environment/environment';
import { AccountDTO } from '../_interfaces/AccountDTO';
import { CardDTO } from '../_interfaces/CardDTO';
import { SocialDTO } from '../_interfaces/SocialDTO';

@Injectable({
  providedIn: 'root'
})
export class SocialSevice {
  url: string;

  constructor(private http: HttpClient) {
    this.url = "https://localhost:7058/api";
  }

  public getAllSocials(): Observable<Array<SocialDTO>> {
    let newUrl = this.url + '/Social/GetAllSocials';
    return this.http.get<Array<SocialDTO>>(newUrl);
  }

  public getSocialById(id:string): Observable<SocialDTO> {
    let newUrl = this.url + '/Social/GetSocialById/'+id;
    return this.http.get<SocialDTO>(newUrl);
  }

  public postSocial(social: SocialDTO): Observable<SocialDTO> {
    const postedSocial={socialPlateform: social.socialPlatform, socialUrl : social.socialUrl, profileId : social.profileId}
    let newUrl = this.url + '/Social/CreateSocial';
    console.log(postedSocial)
    return this.http.post<SocialDTO>(newUrl, postedSocial);
  }

  deleteSocial(id: string): Observable<void> {
    let newUrl = this.url + '/Social/DeleteSocial';
    return this.http.delete<void>(`${newUrl}/${id}`);
  }

  public updateSocial(social: SocialDTO, id : string): Observable<SocialDTO> {
    let newUrl = this.url + '/Social/UpdateSocial/'+id;
    return this.http.put<SocialDTO>(newUrl, social);
  }
}
