import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppConfig } from '../app-config';
import { Observable } from 'rxjs';
import { City } from "../model/city.model";
import { Main } from "../model/main.model";

@Injectable()
export class CitiesService {

  constructor(private http: HttpClient) {  }

  getCityById(id: number): Observable<City> {
    const url: string = AppConfig.singleCityUrl + id + AppConfig.key;
    return this.http.get<City>(url, {observe: 'body', responseType: 'json'});
  }

  getAllDesiredCities(): Observable<City[]> {
    const url: string = AppConfig.groupCityUrl + this.concatCities(AppConfig.cities) + AppConfig.key;
    return this.http.get<City[]>(url, {observe: 'body', responseType: 'json'});

  }

  concatCities(cities: {name:string, id: number}[]): string {
    let concat: string = '';
    for (let city of cities) {
      concat += city.id + ',';
    }
    return concat.slice(0, -1);
  }

}
