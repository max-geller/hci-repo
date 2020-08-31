import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { CoreModule } from './../../core/core.module';

import { HomeComponent } from './home.component';
import { RecentProjectsComponent } from './components/recent-projects/recent-projects.component';
import { ProjectCarouselComponent } from './components/project-carousel/project-carousel.component';
import { BannerComponent } from './components/banner/banner.component';
import { RequestAccessComponent } from './components/request-access/request-access.component';
import { BrowseTagsComponent } from './components/browse-tags/browse-tags.component';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
    declarations: [
        HomeComponent,
        BrowseTagsComponent,
        StatsComponent,
        RecentProjectsComponent,
        ProjectCarouselComponent,
        BannerComponent,
        RequestAccessComponent,
    ],
    imports: [
        CommonModule,
        CoreModule,
        SharedModule,
    ],

})
export class HomeModule { }
