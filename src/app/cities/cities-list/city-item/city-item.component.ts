import { Component, OnInit, Input } from '@angular/core';
import { City } from "../../model/city.model";

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {

  @Input() city: City;

  constructor() { }

  ngOnInit() {
  }

}
