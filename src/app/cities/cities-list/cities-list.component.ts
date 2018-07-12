import { Component, OnInit, Output } from '@angular/core';
import { City } from "../model/city.model";
import { CitiesService } from "../service/cities.service";

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  allCities: City[];

  allGoodCities: City[];

  @Output() currentCity: City;

  constructor(private city: CitiesService) { }

  ngOnInit() {

    this.city.getCityTempObservable()
      .subscribe(
        (data: City) => {
          this.currentCity = data;
        }
      );

    this.city.getAllDesiredCities()
      .subscribe(
        (citiesList: City[]) => {
          this.allCities = citiesList;
        }
      );
  }

}
