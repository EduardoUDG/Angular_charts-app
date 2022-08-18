import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UsersSocialMedia{
  socialMediaName:number;
}

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(
    private _http: HttpClient
  ) { }

  getUsersSocialMedia() {
    return this._http.get<UsersSocialMedia>('http://localhost:3000/grafica')
  }


}
