import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { ArticlesComponent } from './features/articles/articles.component';
import { AboutComponent } from './pages/about/about.component';
import { TagsComponent } from './pages/tags/tags.component';
import { MissionComponent } from './pages/mission/mission.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProComponent } from './pages/pro/pro.component';
import { StoreComponent } from './pages/store/store.component';
import { NotFoundComponent } from './shared/components/pages/not-found/not-found.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TermsComponent } from './pages/terms/terms.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sessions',
    loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule),
  },
  {
    path: 'courses',
    loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule),
  },
  {
    path: 'guides',
    loadChildren: () => import('./features/guides/guides.module').then(m => m.GuidesModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'topics',
    component: TopicsComponent
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
    path: 'mission',
    component: MissionComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'pro',
    component: ProComponent
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
    path: '*',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutes { }
