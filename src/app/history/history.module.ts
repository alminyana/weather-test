import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { HistoryComponent } from './history.component';
import { HistoryItemComponent } from './history-item/history-item.component';
import { CitiesModule } from '../cities/cities.module';
import { CitiesService } from '../cities/service/cities.service';
import { LocalStorageService } from '../cities/service/localStoreage-service';
import { RefreshService } from '../cities/service/refresh.service';

@NgModule ({
    declarations: [
        HistoryComponent,
        HistoryItemComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        CitiesModule
    ],
    providers: [LocalStorageService],
})
export class HistoryModule {}
