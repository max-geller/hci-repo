import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { CoreModule } from './../../core/core.module';
import { BrowseTagsComponent } from './components/browse-tags/browse-tags.component';
import { StatsComponent } from './components/stats/stats.component';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent,
        BrowseTagsComponent,
        StatsComponent,
    ],
    imports: [
        CommonModule,
        CoreModule,
        SharedModule,
    ],

})
export class HomeModule { }
