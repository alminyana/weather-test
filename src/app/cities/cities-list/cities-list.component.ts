import { Component, OnInit, Output } from '@angular/core';
import { City } from "../model/city.model";
import { CitiesService } from "../service/cities.service";

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  loaded: boolean = false;
  allCities: City[];
  @Output() currentCity: City;

  constructor(private citySrv: CitiesService) { }

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.citySrv.getAllDesiredCities()
      .subscribe(
        (citiesList: City[]) => {
          this.allCities = citiesList['list'];
          this.loaded = true;
        }
      );
  }

  onRefreshData() {
    this.loaded = false;
    this.getCities();
  }

}
