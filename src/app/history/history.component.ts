import { Component, OnInit, Output } from '@angular/core';
import { LocalStorageService } from "../cities/service/localStoreage-service";
import { City } from "../cities/model/city.model";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: City[];
  allLima: City[];
  @Output() one: City;
  constructor(private localSrv: LocalStorageService) { }

  ngOnInit() {
    this.history = this.localSrv.getData();
  }

  filterByCity(list: City[]) {
    this.allLima = this.history.filter(
      city => city['name'] ==='Lima'
    );
  }


}
