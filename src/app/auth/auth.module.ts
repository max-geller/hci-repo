import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModule } from './admin/admin.module';
import { AboutComponent } from './pages/about/about.component';
import { TagsComponent } from './pages/tags/tags.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SessionsModule } from './sessions/sessions.module';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeModule } from './pages/home/home.module';
import { DatabaseModule } from './features/database/database.module';
import { SystemsModule } from './features/database/modules/systems/systems.module';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { TasksModule } from './features/tasks/tasks.module';
import { RatesModule } from './features/rates/rates.module';
import { ProjectsModule } from './features/projects/projects.module';
import { IndicesModule } from './features/indices/indices.module';
import { ClientsModule } from './admin/modules/clients/clients.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from '../shared/nav/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AboutComponent,
    TagsComponent,
    ContactComponent,
    PrivacyComponent,
    TermsComponent,
    ProfileComponent,
    FavoritesComponent,
    NotificationsComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule,
    HomeModule,
    AdminModule,
    SessionsModule,
    RatesModule,
    IndicesModule,
    ProjectsModule,
    ClientsModule,
    TasksModule,
    DatabaseModule,
    SystemsModule,
  ]
})
export class AuthModule { }
