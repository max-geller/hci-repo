
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
import { NgxSpinnerModule } from 'ngx-spinner';
import { InMemoryDataService } from './shared/in-memory-db/inmemory-db.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AuthService } from './core/services/auth.service';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { ParallaxDirective } from './shared/directives/parallax.directive';
import { NotFoundComponent } from './shared/components/pages/not-found/not-found.component';
import { NgAisModule } from 'angular-instantsearch';
import { ToastrModule } from 'ngx-toastr';
import { AvatarModule } from 'ngx-avatar';
import { AuthModule } from './auth/auth.module';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { IconMenuComponent } from './shared/nav/icon-menu/icon-menu.component';
import { FooterComponent } from './shared/nav/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AnalyticsModule } from './auth/features/analytics/analytics.module';



@NgModule({
  declarations: [
    AppComponent,
    ParallaxDirective,
    AuthLayoutComponent,
    IconMenuComponent,
    FooterComponent,
    NotFoundComponent
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
    ToastrModule.forRoot(),
    NgAisModule.forRoot(),
    environment.production ?
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 }) : [],
    AvatarModule,
    AuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AnalyticsModule
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule,
    NgAisModule,
    AvatarModule,
  ]
})

export class AppModule { }
