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

  interval: number = 1000 * 10;
  loaded: boolean = false;
  allCities: City[];
  countDown: number = this.interval;
  @Output() currentCity: City;

  constructor(private citySrv: CitiesService) { }

  ngOnInit() {
    this.getCities();
    //this.showCounter();
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

  showCounter() {
    const counter: Observable<number> = Observable.interval(1000);
    counter.subscribe(
      (number: number) => {
        this.countDown -= number;
      }
    );
  }

  onRefreshData():void {
    this.loaded = false;
    this.getCities();
  }

}
