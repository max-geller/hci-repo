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
import { AuthRoutes } from './auth.routes';
import { FavoritesTableComponent } from './pages/favorites/favorites-table/favorites-table.component';
import { SupportComponent } from './pages/support/support.component';
import { DocsComponent } from './pages/docs/docs.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { AuthService } from '../core/services/auth.service';

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
    FavoritesTableComponent,
    SupportComponent,
    DocsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule,
    AuthRoutes,
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
  ],
  providers: [AuthService, AuthGuard]
})
export class AuthModule { }
