import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CitiesComponent } from "./cities/cities.component";
import { CityDetailComponent } from "./cities/cities-list/city-detail/city-detail.component";
import { HistoryComponent } from "./history/history.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/cities', pathMatch: 'full' },
  { path: 'cities', component: CitiesComponent, children: [
    { path: ':id', component: CityDetailComponent }
  ] },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
