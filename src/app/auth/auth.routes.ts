import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TermsComponent } from './pages/terms/terms.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TagsComponent } from './pages/tags/tags.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ContactComponent } from './pages/contact/contact.component';
import { SupportComponent } from './pages/support/support.component';
import { DocsComponent } from './pages/docs/docs.component';
import { FilesComponent } from './pages/files/files.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'projects',
        loadChildren: () => import('./features/projects/projects.module').then(m => m.ProjectsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'indices',
        loadChildren: () => import('./features/indices/indices.module').then(m => m.IndicesModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'clients',
        loadChildren: () => import('./features/clients/clients.module').then(m => m.ClientsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'tasks',
        loadChildren: () => import('./features/tasks/tasks.module').then(m => m.TasksModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'contractors',
        loadChildren: () => import('./features/contractors/contractors.module').then(m => m.ContractorsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'rates',
        loadChildren: () => import('./features/rates/rates.module').then(m => m.RatesModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'database',
        loadChildren: () => import('./features/database/database.module').then(m => m.DatabaseModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'sessions',
        loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule),
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'files',
        component: FilesComponent
    },
    {
        path: 'tags',
        component: TagsComponent
    },
    {
        path: 'privacy',
        component: PrivacyComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'docs',
        component: DocsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'support',
        component: SupportComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'terms',
        component: TermsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'favorites',
        component: FavoritesComponent,
        canActivate: [AuthGuard]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutes { }
