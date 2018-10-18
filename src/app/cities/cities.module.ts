import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesComponent } from './cities.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { CityItemComponent } from './cities-list/city-item/city-item.component';
import { CityDetailComponent } from './cities-list/city-detail/city-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { MapComponent } from './map/map.component';
import { CelsiusPipe } from './celsius.pipe';
import { CitiesService } from './service/cities.service';
import { LocalStorageService } from './service/localStoreage-service';
import { RefreshService } from './service/refresh.service';

@NgModule({
    declarations: [
        CitiesComponent,
        CitiesListComponent,
        CityItemComponent,
        CityDetailComponent,
        MapComponent,
        CelsiusPipe
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    providers: [CitiesService, LocalStorageService, RefreshService],
    exports: [
        CelsiusPipe
    ]
})
export class CitiesModule { }
