import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { AppRoutingModule } from './app-routing.module';
import { CitiesListComponent } from "./cities-list/cities-list.component";

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CitiesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
