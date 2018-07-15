import { Component, Input } from '@angular/core';
import { City } from "../../cities/model/city.model";

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})
export class HistoryItemComponent {

  @Input() oneItem: City;


}
