

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment.dev';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { AgmCoreModule } from '@agm/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InMemoryDataService } from './shared/in-memory-db/inmemory-db.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AuthService } from './core/services/auth.service';
import { FooterComponent } from './shared/nav/footer/footer.component';
import { IconMenuComponent } from './shared/nav/icon-menu/icon-menu.component';
import { SidenavComponent } from './shared/nav/sidenav/sidenav.component';
import { AdminModule } from './admin/admin.module';
import { AboutComponent } from './pages/about/about.component';
import { TagsComponent } from './pages/tags/tags.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SessionsModule } from './sessions/sessions.module';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { ParallaxDirective } from './shared/directives/parallax.directive';
import { RatesModule } from './features/rates/rates.module';
import { ProjectsModule } from './features/projects/projects.module';
import { IndicesModule } from './features/indices/indices.module';
import { ClientsModule } from './admin/modules/clients/clients.module';
import { NavbarComponent } from './shared/nav/navbar/navbar.component';
import { SparklineComponent } from './custom-charts/sparkline/sparkline.component';
import { TimelineFilterBarChartComponent } from './custom-charts/timeline-filter-bar-chart/timeline-filter-bar-chart.component';
import { ComboChartComponent, ComboSeriesVerticalComponent } from './custom-charts/combo-chart';
import { ChartsComponent } from './pages/charts/charts.component';
import { NotFoundComponent } from './shared/components/pages/not-found/not-found.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IconMenuComponent,
    SidenavComponent,
    NavbarComponent,
    AboutComponent,
    TagsComponent,
    ContactComponent,
    PrivacyComponent,
    TermsComponent,
    ProfileComponent,
    ParallaxDirective,
    NotFoundComponent,
    ChartsComponent,
    SparklineComponent,
    TimelineFilterBarChartComponent,
    ComboChartComponent,
    ComboSeriesVerticalComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
    AppRoutes,
    HttpClientModule,
    NgxSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFireStorageModule,
    environment.production ?
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 }) : [],
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCYTxkREIgB7sNozUDIhlVNNDwXg9SS3wk' }),
    HomeModule,
    AdminModule,
    SessionsModule,
    RatesModule,
    IndicesModule,
    ProjectsModule,
    ClientsModule,


  ],
  providers: [
    AuthService,

  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
