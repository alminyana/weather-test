import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CitiesService } from "../../service/cities.service";
import { City } from "../../model/city.model";

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

  selectedCity: City = undefined;

  constructor(
    private route: ActivatedRoute,
    private citySrv: CitiesService ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.citySrv.getCityById(+params['id'])
            .subscribe(
              (oneCity: City) => {
                this.selectedCity = oneCity;
              }
            );

        }
      );
  }

}
