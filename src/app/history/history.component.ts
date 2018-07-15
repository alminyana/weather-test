import { Component, OnInit, Output } from '@angular/core';

import { AppConfig } from '../cities/app-config';
import { LocalStorageService } from "../cities/service/localStoreage-service";
import { City } from "../cities/model/city.model";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: City[];
  histLima: City[];
  @Output() one: City;
  constructor(private localSrv: LocalStorageService) { }

  ngOnInit() {
    this.history = this.localSrv.getData();
    this.histLima = this.filterByCity(this.history, AppConfig.cities[2].name);
  }

  filterByCity(list: City[], cityName: string): City[] {
    return this.history.filter(
      city => city['name'] === cityName
    );
  }


}
