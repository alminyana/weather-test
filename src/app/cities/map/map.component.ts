import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Coordinates } from '../model/coordinates.model';
import { } from '@types/googlemaps';
import { RefreshService } from "../service/refresh.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    @Input() coords: Coordinates;
    @ViewChild('gmap') gmapElement: ElementRef;
    map: google.maps.Map;
    marker: google.maps.Marker;

    lat:number = -34.61;
    long: number = -58.38;

  constructor( private refreshSrv: RefreshService) { }

  ngOnInit() {
    this.createMap();

    this.refreshSrv.refreshMap
      .subscribe(
        (data: any) => {
          this.map.setCenter({lat:data.lat, lng:data.lon});
        }
      );

  }

  createMap() {
    let mapProp = {
      center: new google.maps.LatLng(this.coords.lat, this.coords.lon ),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      clickableIcons: false
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
