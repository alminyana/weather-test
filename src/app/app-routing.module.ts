import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CitiesComponent } from "./cities/cities.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/cities', pathMatch: 'full'},
  {path: 'cities', component: CitiesComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
