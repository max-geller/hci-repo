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

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'projects',
        loadChildren: () => import('./features/projects/projects.module').then(m => m.ProjectsModule),
    },
    {
        path: 'indices',
        loadChildren: () => import('./features/indices/indices.module').then(m => m.IndicesModule),
    },
    {
        path: 'clients',
        loadChildren: () => import('./features/clients/clients.module').then(m => m.ClientsModule),
    },
    {
        path: 'tasks',
        loadChildren: () => import('./features/tasks/tasks.module').then(m => m.TasksModule),
    },
    {
        path: 'contractors',
        loadChildren: () => import('./features/contractors/contractors.module').then(m => m.ContractorsModule),
    },
    {
        path: 'rates',
        loadChildren: () => import('./features/rates/rates.module').then(m => m.RatesModule),
    },
    {
        path: 'database',
        loadChildren: () => import('./features/database/database.module').then(m => m.DatabaseModule),
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
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
        path: 'tags',
        component: TagsComponent
    },
    {
        path: 'privacy',
        component: PrivacyComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    
    {
        path: 'terms',
        component: TermsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'favorites',
        component: FavoritesComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutes { }
