import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CitiesService } from "../../service/cities.service";
import { City } from "../../model/city.model";
import { RefreshService } from "../../service/refresh.service";

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

  loaded: boolean = false;
  selectedCity: City = undefined;

  constructor(
    private route: ActivatedRoute,
    private citySrv: CitiesService,
    private refreshSrv: RefreshService) { }

  ngOnInit() {
    this.getDetailCityById();
    this.onRefreshData();
  }

  onRefreshData() {
    this.refreshSrv.refreshData
      .subscribe(
        (data: boolean) => {
          if (data) {
            this.refreshDetail();
          }
        }
      );
  }

  getDetailCityById() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.citySrv.getCityById(+params['id'])
            .subscribe(
              (oneCity: City) => {
                this.selectedCity = oneCity;
                this.loaded = true;
              }
            );

        }
      );
  }

  refreshDetail() {
    this.loaded = false;
    this.getDetailCityById();
  }

}
