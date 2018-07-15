import { Component, OnInit, Output } from '@angular/core';
import { City } from "../model/city.model";
import { CitiesService } from "../service/cities.service";
import { Observable } from 'rxjs';
import { LocalStorageService } from "../service/localStoreage-service";
import { RefreshService } from "../service/refresh.service";
import { AppConfig } from '../app-config';


@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  interval: number = AppConfig.time.miliseconds * AppConfig.time.numberOfMinutes * AppConfig.time.secondsPerMinute;
  loaded: boolean = false;
  allCities: City[];

  @Output() currentCity: City;

  constructor(private citySrv: CitiesService,
              private localSrv: LocalStorageService,
              private refreshSrv: RefreshService) { }

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
          this.localSrv.saveData(this.allCities);
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
              this.localSrv.updateData(this.allCities);
          }
      );
  }

  onRefreshData():void {
    this.loaded = false;
    this.refreshSrv.refreshData.next(true);
    this.getCitiesOnce();
  }

}
