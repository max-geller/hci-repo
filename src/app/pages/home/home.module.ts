import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { CoreModule } from './../../core/core.module';
import { FeedComponent } from './components/feed/feed.component';
import { BrowseTagsComponent } from './components/browse-tags/browse-tags.component';
import { BrowseCoursesComponent } from './components/browse-courses/browse-courses.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { StatsComponent } from './components/stats/stats.component';
import { CtaComponent } from './components/cta/cta.component';
import { HomeComponent } from './home.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

@NgModule({
    declarations: [
        HomeComponent,
        FeedComponent,
        BrowseTagsComponent,
        BrowseCoursesComponent,
        ReviewsComponent,
        StatsComponent,
        CtaComponent,
        NewsletterComponent,
    ],
    imports: [
        CommonModule,
        CoreModule,
        SharedModule,
    ],

})
export class HomeModule { }
