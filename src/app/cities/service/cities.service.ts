import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppConfig } from '../app-config';
import { Observable } from 'rxjs';
import { City } from "../model/city.model";
import { Main } from "../model/main.model";

@Injectable()
export class CitiesService {

  one: any;

  constructor(private http: HttpClient) {  }

  getCityTemp() {

    const url = AppConfig.url + AppConfig.cities[2].id + AppConfig.key;
    //return this.http.get(url, {observe: 'body', responseType: 'json'});

    this.http.get(url, {observe: 'body', responseType: 'json'}).subscribe(
      (data) => {
        console.log('data', data);
         this.one = data;

         let city: City = new City(this.one['id'], this.one['name'], this.one['main']);

         console.log('city', city);

      },
      (error) => {
        console.log('error', error);
      }
    );



  }


}
