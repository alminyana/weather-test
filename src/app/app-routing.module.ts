import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CitiesComponent } from "./cities/cities.component";
import { CityDetailComponent } from "./cities/cities-list/city-detail/city-detail.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/cities', pathMatch: 'full' },
  { path: 'cities', component: CitiesComponent, children: [
    { path: ':id', component: CityDetailComponent }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
