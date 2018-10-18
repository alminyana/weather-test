import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CitiesService } from './cities/service/cities.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { LocalStorageService } from './cities/service/localStoreage-service';
import { HistoryComponent } from './history/history.component';
import { HistoryItemComponent } from './history/history-item/history-item.component';
import { RefreshService } from './cities/service/refresh.service';

import { CitiesModule } from './cities/cities.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HistoryComponent,
    HistoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CitiesModule
  ],
  providers: [CitiesService, LocalStorageService, RefreshService],
  bootstrap: [AppComponent]
})
export class AppModule { }
