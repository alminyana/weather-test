import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CitiesService } from './cities/service/cities.service';

import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { AppRoutingModule } from './app-routing.module';
import { CitiesListComponent } from "./cities/cities-list/cities-list.component";
import { HeaderComponent } from './header/header.component';
import { CityItemComponent } from "./cities/cities-list/city-item/city-item.component";
import { CityDetailComponent } from './cities/cities-list/city-detail/city-detail.component';
import { CelsiusPipe } from './cities/celsius.pipe';
import { LocalStorageService } from './cities/service/localStoreage-service';
import { HistoryComponent } from './history/history.component';
import { HistoryItemComponent } from './history/history-item/history-item.component';
import { RefreshService } from './cities/service/refresh.service';


@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CitiesListComponent,
    HeaderComponent,
    CityItemComponent,
    CityDetailComponent,
    CelsiusPipe,
    HistoryComponent,
    HistoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CitiesService, LocalStorageService, RefreshService],
  bootstrap: [AppComponent]
})
export class AppModule { }
