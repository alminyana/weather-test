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


@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CitiesListComponent,
    HeaderComponent,
    CityItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
