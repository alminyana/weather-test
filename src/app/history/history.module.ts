import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { HistoryComponent } from './history.component';
import { HistoryItemComponent } from './history-item/history-item.component';
import { CitiesModule } from '../cities/cities.module';

@NgModule ({
    declarations: [
        HistoryComponent,
        HistoryItemComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        CitiesModule
    ]
})
export class HistoryModule {}
