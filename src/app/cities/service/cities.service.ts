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

  getCityTemp(): void {

    const url: string = AppConfig.singleCityUrl + AppConfig.cities[2].id + AppConfig.key;
    //return this.http.get(url, {observe: 'body', responseType: 'json'});

    this.http.get(url, {observe: 'body', responseType: 'json'}).subscribe(
      (data) => {
         let city: City = new City(data['id'], data['name'], data['main']);
         console.log('city', city);
         return city;
      }
    );
  }

  getCityTempObservable() {
    const url: string = AppConfig.singleCityUrl + AppConfig.cities[2].id + AppConfig.key;
    return this.http.get<City>(url, {observe: 'body', responseType: 'json'});
  }

  getAllDesiredCities() {
    const url: string = '';
  }

}
