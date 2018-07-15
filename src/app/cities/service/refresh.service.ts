import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RefreshService {
  refreshData = new Subject<Boolean>();
  refreshMap = new Subject<any>();
}
