import { Component, OnInit } from '@angular/core';
import { CitiesService } from './service/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  constructor(private city: CitiesService) { }

  ngOnInit() {
    // this.city.getCityTemp()
    //   .subscribe(
    //     (data) => {
    //       console.log('data', data);
    //     },
    //     (error) => {
    //       console.log('error', error);
    //     }
    //   );

    this.city.getCityTemp();

  }

}
