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

  history: City[] = [];
  histLima: City[];
  histBuenos: City[];
  histSantiago: City[];
  histSaoPaolo: City[];

  @Output() one: City;
  constructor(private localSrv: LocalStorageService) { }

  ngOnInit() {
    this.history = this.localSrv.getData();
    if (this.history && this.history.length > 0) {
      this.histLima = this.filterByCity(this.history, AppConfig.cities[2].name);
      this.histBuenos = this.filterByCity(this.history, AppConfig.cities[1].name);
      this.histSaoPaolo = this.filterByCity(this.history, AppConfig.cities[0].name);
      this.histSantiago = this.filterByCity(this.history, AppConfig.cities[3].name);
    }
  }

  filterByCity(list: City[], cityName: string): City[] {
    return this.history.filter(
      city => city['name'] === cityName
    );
  }


}
