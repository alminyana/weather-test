import { Component, OnInit, Output } from '@angular/core';
import { City } from "../model/city.model";
import { CitiesService } from "../service/cities.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  interval: number = 1000 * 5;
  loaded: boolean = false;
  allCities: City[];

  @Output() currentCity: City;

  constructor(private citySrv: CitiesService) { }

  ngOnInit() {
    this.getCitiesOnce();
    this.getCities();
  }

  getCitiesOnce() {
    this.citySrv.getAllDesiredCities()
      .subscribe(
        (cities: City[]) => {
          this.allCities = cities['list'];
          this.loaded = true;
        }
      );
  }

  getCities(): void {
      const getCitiesInterval = Observable
        .interval(this.interval)
        .timeInterval()
        .do(()=> { this.loaded = false;})
        .flatMap(() => this.citySrv.getAllDesiredCities());

      getCitiesInterval.subscribe(
        (citiesList: City[]) => {
              this.allCities = citiesList['list'];
              this.loaded = true;
          }
      );
  }

  onRefreshData():void {
    this.loaded = false;
    this.getCities();
  }

}
