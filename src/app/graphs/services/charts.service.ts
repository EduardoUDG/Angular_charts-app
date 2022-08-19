import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

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

  getUsersSocialMedia(): Observable<UsersSocialMedia> {
    return this._http.get<UsersSocialMedia>('http://localhost:3000/grafica')
  }

  getUsersSocialMediaDataDoughnut() {
    return this.getUsersSocialMedia()
      .pipe(
        delay(1500),
        map( data => {
          const labels = Object.keys( data );
          const values = Object.values( data );

          return { labels, values };
        })
      );
  }



}
