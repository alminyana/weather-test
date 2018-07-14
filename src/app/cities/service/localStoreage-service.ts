import { Injectable } from "@angular/core";
import { City } from "../model/city.model";

Injectable()
export class LocalStorageService {
  cities: City[];

  saveData(data: City[]):void {
    localStorage.setItem('CitiesHistory', JSON.stringify(data));
  }

  getData(): City[] {
    return JSON.parse(localStorage.getItem('CitiesHistory'));
  }

  updateData(lastCities: City[]): void {
    this.cities = this.getData();

    lastCities.forEach( city  => {
      this.cities.push (city);
    });

    this.saveData(this.cities);

  }

}
